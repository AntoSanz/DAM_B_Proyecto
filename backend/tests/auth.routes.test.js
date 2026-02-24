const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../src/app');
const { initializeDatabase, db } = require('../src/config/db');

let server;
let baseUrl;

function cleanUsersTable() {
  db.exec(`
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name = 'users';
  `);
}

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const body = await response.json().catch(() => ({}));
  return { response, body };
}

test.before(() => {
  initializeDatabase();

  server = app.listen(0);
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

test.after(() => {
  server.close();
});

test.beforeEach(() => {
  cleanUsersTable();
});

test('POST /api/auth/register crea usuario con password hasheada', async () => {
  const { response, body } = await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'nuevo@test.com',
      password: 'secret123',
      name: 'Nuevo Usuario',
    }),
  });

  assert.equal(response.status, 201);
  assert.equal(body.ok, true);
  assert.equal(body.user.email, 'nuevo@test.com');

  const stored = db.prepare('SELECT password FROM users WHERE email = ?').get('nuevo@test.com');
  assert.ok(stored.password.startsWith('scrypt$'));
  assert.notEqual(stored.password, 'secret123');
});

test('POST /api/auth/login autentica usuario válido', async () => {
  await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'admin@test.com',
      password: 'secret123',
      name: 'Admin',
    }),
  });

  const { response, body } = await request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'admin@test.com',
      password: 'secret123',
    }),
  });

  assert.equal(response.status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.user.email, 'admin@test.com');
});

test('POST /api/auth/login rechaza credenciales inválidas y patrón SQL injection', async () => {
  await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'user@test.com',
      password: 'secret123',
      name: 'User',
    }),
  });

  const badPassword = await request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'user@test.com',
      password: 'incorrecta',
    }),
  });

  assert.equal(badPassword.response.status, 401);
  assert.equal(badPassword.body.ok, false);

  const sqlInjectionAttempt = await request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: "' OR 1=1 --",
      password: 'secret123',
    }),
  });

  assert.equal(sqlInjectionAttempt.response.status, 401);
  assert.equal(sqlInjectionAttempt.body.ok, false);
});

test('POST /api/auth/register devuelve 409 si el email ya existe', async () => {
  await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'duplicado@test.com',
      password: 'secret123',
      name: 'User One',
    }),
  });

  const { response, body } = await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'duplicado@test.com',
      password: 'secret123',
      name: 'User Two',
    }),
  });

  assert.equal(response.status, 409);
  assert.equal(body.ok, false);
});