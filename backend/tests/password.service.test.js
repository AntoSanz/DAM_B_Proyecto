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

  assert.deepEqual(
    {
      hashed: isHashedPassword(hashed),
      valid: verifyPassword(plainPassword, hashed),
      invalid: verifyPassword('otra-pass', hashed),
    },
    {
      hashed: true,
      valid: true,
      invalid: false,
    }
  );
});

test('verifyPassword soporta fallback legacy en texto plano', () => {
  assert.deepEqual(
    {
      samePlain: verifyPassword('admin', 'admin'),
      wrongPlain: verifyPassword('admin', 'admin123'),
    },
    {
      samePlain: true,
      wrongPlain: false,
    }
  );
});