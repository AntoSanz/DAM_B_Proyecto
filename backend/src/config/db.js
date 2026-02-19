const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = path.resolve(__dirname, '../../database.sqlite');

const db = new Database(DB_PATH);

db.pragma('foreign_keys = ON');

function initializeDatabase() {
	db.exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			email TEXT NOT NULL UNIQUE,
			password TEXT NOT NULL,
			name TEXT,
			role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
			created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
		);
	`);
}

module.exports = {
	db,
	DB_PATH,
	initializeDatabase,
};
