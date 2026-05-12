const test = require('node:test');
const assert = require('node:assert/strict');

const { initializeDatabase, db } = require('../../backend/src/config/db');
const authService = require('../../backend/src/services/auth.service');

function cleanTables() {
  db.exec(`
    DELETE FROM history_orders;
    DELETE FROM orders;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('users','orders','history_orders');
  `);
}

test.before(() => {
  initializeDatabase();
});

test.beforeEach(() => {
  cleanTables();
});

test('register crea usuario normalizando email y sin exponer password', () => {
  const result = authService.register({
    email: '  Nuevo@Test.com  ',
    password: 'secret123',
    name: 'Nuevo',
  });

  assert.equal(result.ok, true);
  assert.equal(result.status, 201);
  assert.equal(result.user.email, 'nuevo@test.com');
  assert.equal(Object.prototype.hasOwnProperty.call(result.user, 'password'), false);

  const stored = db.prepare('SELECT password FROM users WHERE email = ?').get('nuevo@test.com');
  assert.equal(stored.password.startsWith('scrypt$'), true);
});

test('register devuelve 409 cuando email ya existe', () => {
  authService.register({ email: 'dup@test.com', password: 'secret123', name: 'A' });
  const result = authService.register({ email: 'dup@test.com', password: 'secret123', name: 'B' });

  assert.equal(result.ok, false);
  assert.equal(result.status, 409);
});

test('register devuelve 400 para password corta', () => {
  const result = authService.register({ email: 'x@test.com', password: '123', name: 'X' });
  assert.equal(result.ok, false);
  assert.equal(result.status, 400);
});

test('login autentica usuario valido', () => {
  authService.register({ email: 'user@test.com', password: 'secret123', name: 'User' });
  const result = authService.login({ email: 'user@test.com', password: 'secret123' });

  assert.equal(result.ok, true);
  assert.equal(result.status, 200);
  assert.equal(result.user.email, 'user@test.com');
});

test('login devuelve 401 para password incorrecta', () => {
  authService.register({ email: 'user@test.com', password: 'secret123', name: 'User' });
  const result = authService.login({ email: 'user@test.com', password: 'badpass' });

  assert.equal(result.ok, false);
  assert.equal(result.status, 401);
});

test('login migra password legacy en texto plano a hash', () => {
  db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)').run('legacy@test.com', 'legacy123', 'Legacy');

  const before = db.prepare('SELECT password FROM users WHERE email = ?').get('legacy@test.com');
  assert.equal(before.password, 'legacy123');

  const result = authService.login({ email: 'legacy@test.com', password: 'legacy123' });
  assert.equal(result.ok, true);

  const after = db.prepare('SELECT password FROM users WHERE email = ?').get('legacy@test.com');
  assert.equal(after.password.startsWith('scrypt$'), true);
}
);