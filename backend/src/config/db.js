const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const CATALOG_SEED_SQL_PATH = path.resolve(__dirname, '../../database/seeds/catalog.seed.sql');

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

		CREATE TABLE IF NOT EXISTS categories (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL,
			description TEXT
		);

		CREATE TABLE IF NOT EXISTS products (
			id INTEGER PRIMARY KEY,
			category_id INTEGER NOT NULL,
			name TEXT NOT NULL,
			short_description TEXT,
			long_description TEXT,
			price REAL NOT NULL,
			image TEXT,
			genre TEXT,
			developer TEXT,
			players TEXT,
			release_date TEXT,
			in_stock INTEGER NOT NULL DEFAULT 1,
			rating REAL,
			created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
		);
	`);

	seedCatalogDataIfEmpty();
}

function seedCatalogDataIfEmpty() {
	const categoriesCount = db.prepare('SELECT COUNT(*) AS total FROM categories').get().total;
	const productsCount = db.prepare('SELECT COUNT(*) AS total FROM products').get().total;

	if (categoriesCount > 0 || productsCount > 0) {
		return;
	}

	const sql = fs.readFileSync(CATALOG_SEED_SQL_PATH, 'utf8');
	db.exec(sql);
}

module.exports = {
	db,
	DB_PATH,
	initializeDatabase,
};
