const test = require('node:test');
const assert = require('node:assert/strict');

const {
  hashPassword,
  verifyPassword,
  isHashedPassword,
} = require('../src/services/password.service');

test('hashPassword devuelve formato scrypt y verifyPassword valida correctamente', () => {
  const plainPassword = 'secret123';
  const hashed = hashPassword(plainPassword);

  assert.equal(isHashedPassword(hashed), true);
  assert.equal(verifyPassword(plainPassword, hashed), true);
  assert.equal(verifyPassword('otra-pass', hashed), false);
});

test('verifyPassword soporta fallback legacy en texto plano', () => {
  assert.equal(verifyPassword('admin', 'admin'), true);
  assert.equal(verifyPassword('admin', 'admin123'), false);
});