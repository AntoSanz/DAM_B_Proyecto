-- Seed inicial para la tabla users
-- Nota: las contraseñas de ejemplo están en texto plano solo para desarrollo local.
-- En producción deben almacenarse siempre hasheadas (bcrypt/argon2).

INSERT OR IGNORE INTO users (email, password, name, role)
VALUES
  ('admin@test.com', 'admin123', 'Administrador Demo', 'admin'),
  ('user@test.com', 'user123', 'Usuario Demo', 'user');
