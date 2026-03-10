const crypto = require('crypto');

const SCRYPT_PREFIX = 'scrypt';
const KEY_LENGTH = 64;
const SCRYPT_N = 16384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;

function hashPassword(plainPassword) {
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto
    .scryptSync(plainPassword, salt, KEY_LENGTH, {
      N: SCRYPT_N,
      r: SCRYPT_R,
      p: SCRYPT_P,
    })
    .toString('hex');

  return `${SCRYPT_PREFIX}$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${salt}$${derivedKey}`;
}

function isHashedPassword(password) {
  return typeof password === 'string' && password.startsWith(`${SCRYPT_PREFIX}$`);
}

function verifyPassword(plainPassword, storedPassword) {
  if (!storedPassword || typeof storedPassword !== 'string') {
    return false;
  }

  if (!isHashedPassword(storedPassword)) {
    return plainPassword === storedPassword;
  }

  const parts = storedPassword.split('$');

  if (parts.length !== 6) {
    return false;
  }

  const [prefix, nRaw, rRaw, pRaw, salt, hash] = parts;

  if (prefix !== SCRYPT_PREFIX) {
    return false;
  }

  const n = Number(nRaw);
  const r = Number(rRaw);
  const p = Number(pRaw);

  const derivedKey = crypto
    .scryptSync(plainPassword, salt, KEY_LENGTH, {
      N: n,
      r,
      p,
    })
    .toString('hex');

  const hashBuffer = Buffer.from(hash, 'hex');
  const derivedBuffer = Buffer.from(derivedKey, 'hex');

  if (hashBuffer.length !== derivedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(hashBuffer, derivedBuffer);
}

module.exports = {
  hashPassword,
  verifyPassword,
  isHashedPassword,
};
