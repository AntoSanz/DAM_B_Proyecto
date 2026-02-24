const fs = require('fs');
const path = require('path');

const usersSeedPath = path.resolve(__dirname, '../../database/seeds/users.seed.sql');

if (!fs.existsSync(usersSeedPath)) {
  throw new Error(`No se encontró el archivo seed: ${usersSeedPath}`);
}

const { initializeDatabase, db } = require('../config/db');

initializeDatabase();

db.exec(`
  DELETE FROM users;
  DELETE FROM products;
  DELETE FROM categories;
  DELETE FROM sqlite_sequence WHERE name = 'users';
`);

initializeDatabase();

const usersSql = fs.readFileSync(usersSeedPath, 'utf8');
db.exec(usersSql);

const users = db.prepare('SELECT COUNT(*) AS total FROM users').get().total;
const categories = db.prepare('SELECT COUNT(*) AS total FROM categories').get().total;
const products = db.prepare('SELECT COUNT(*) AS total FROM products').get().total;

console.log('Bootstrap de base de datos completado.');
console.log(`Usuarios: ${users}`);
console.log(`Categorías: ${categories}`);
console.log(`Productos: ${products}`);
