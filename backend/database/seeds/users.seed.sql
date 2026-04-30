-- SEED: Tabla users
DELETE FROM users;
DELETE FROM sqlite_sequence WHERE name = 'users';
INSERT INTO users (email, password, name, role)
VALUES ('admin@test.com', 'admin123456', 'admin', 'admin');
INSERT INTO users (email, password, name, role)
VALUES ('user@test.com', 'qauser', 'QA User', 'user');
