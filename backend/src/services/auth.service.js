const userModel = require('../models/user.model');
const { hashPassword, verifyPassword, isHashedPassword } = require('./password.service');

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function sanitizeUser(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}

function validateCredentials(email, password) {
  const normalizedEmail = normalizeEmail(email);
  const normalizedPassword = String(password || '');

  if (!normalizedEmail || !normalizedPassword) {
    return {
      ok: false,
      message: 'Email y contraseña son obligatorios.',
    };
  }

  if (normalizedPassword.length < 6) {
    return {
      ok: false,
      message: 'La contraseña debe tener al menos 6 caracteres.',
    };
  }

  return {
    ok: true,
    email: normalizedEmail,
    password: normalizedPassword,
  };
}

function register({ email, password, name }) {
  const validation = validateCredentials(email, password);

  if (!validation.ok) {
    return {
      ok: false,
      status: 400,
      message: validation.message,
    };
  }

  const existingUser = userModel.findByEmail(validation.email);

  if (existingUser) {
    return {
      ok: false,
      status: 409,
      message: 'El email ya está registrado.',
    };
  }

  const user = userModel.create(
    validation.email,
    hashPassword(validation.password),
    name ? String(name).trim() : null
  );

  return {
    ok: true,
    status: 201,
    user: sanitizeUser(user),
  };
}

function login({ email, password }) {
  const validation = validateCredentials(email, password);

  if (!validation.ok) {
    return {
      ok: false,
      status: 400,
      message: validation.message,
    };
  }

  const user = userModel.findByEmail(validation.email);

  if (!user) {
    return {
      ok: false,
      status: 401,
      message: 'Credenciales inválidas.',
    };
  }

  const isValidPassword = verifyPassword(validation.password, user.password);

  if (!isValidPassword) {
    return {
      ok: false,
      status: 401,
      message: 'Credenciales inválidas.',
    };
  }

  if (!isHashedPassword(user.password)) {
    userModel.update(user.id, { password: hashPassword(validation.password) });
  }

  return {
    ok: true,
    status: 200,
    user: sanitizeUser(userModel.findById(user.id)),
  };
}

module.exports = {
  register,
  login,
};
