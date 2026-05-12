const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../../backend/src/app');
const { initializeDatabase, db } = require('../../backend/src/config/db');

let server;
let baseUrl;

function cleanUsers() {
  db.exec(`
    DELETE FROM history_orders;
    DELETE FROM orders;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('users','orders','history_orders');
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
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.after(() => {
  server.close();
});

test.beforeEach(() => {
  cleanUsers();
});

test('POST /api/auth/register crea usuario', async () => {
  const { response, body } = await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'nuevo@test.com', password: 'secret123', name: 'Nuevo' }),
  });

  assert.equal(response.status, 201);
  assert.equal(body.ok, true);
  assert.equal(body.user.email, 'nuevo@test.com');
});

test('POST /api/auth/register devuelve 409 si duplicado', async () => {
  await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'dup@test.com', password: 'secret123', name: 'Uno' }),
  });

  const second = await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'dup@test.com', password: 'secret123', name: 'Dos' }),
  });

  assert.equal(second.response.status, 409);
  assert.equal(second.body.ok, false);
});

test('POST /api/auth/login autentica y rechaza password incorrecta', async () => {
  await request('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@test.com', password: 'secret123', name: 'Admin' }),
  });

  const okLogin = await request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@test.com', password: 'secret123' }),
  });

  const badLogin = await request('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@test.com', password: 'incorrecta' }),
  });

  assert.equal(okLogin.response.status, 200);
  assert.equal(okLogin.body.ok, true);
  assert.equal(badLogin.response.status, 401);
  assert.equal(badLogin.body.ok, false);
});