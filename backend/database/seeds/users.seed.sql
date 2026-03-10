-- Seed inicial para la tabla users
-- Nota: las contraseñas de ejemplo están en texto plano solo para desarrollo local.
-- En producción deben almacenarse siempre hasheadas.

INSERT INTO users (email, password, name, role)
VALUES ('admin@test.com', 'admin', 'admin', 'admin')
ON CONFLICT(email) DO UPDATE SET
  password = excluded.password,
  name = excluded.name,
  role = excluded.role,
  updated_at = CURRENT_TIMESTAMP;

INSERT OR IGNORE INTO users (email, password, name, role)
VALUES ('user@test.com', 'qauser', 'QA User', 'user');
