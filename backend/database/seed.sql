-- Seed inicial para la tabla users
-- Nota: las contraseñas de ejemplo están en texto plano solo para desarrollo local.
-- En producción deben almacenarse siempre hasheadas (bcrypt/argon2).

INSERT INTO users (email, password, name, role)
VALUES
  ('admin@test.com', 'admin123', 'Administrador Demo', 'admin'),
  ('user@test.com', 'user123', 'Usuario Demo', 'user');

-- Para ejecutar este seed manualmente (ejemplo):
-- 1) Arranca el backend una vez para crear la tabla `users`.
-- 2) Ejecuta el script en SQLite contra `backend/database.sqlite`.