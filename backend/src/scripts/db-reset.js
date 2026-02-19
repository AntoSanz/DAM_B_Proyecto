const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database.sqlite');

if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('Database eliminada:', dbPath);
} else {
  console.log('No existe database.sqlite. Se creará una nueva.');
}

const { initializeDatabase, db } = require('../config/db');

initializeDatabase();

const categories = db.prepare('SELECT COUNT(*) AS total FROM categories').get().total;
const products = db.prepare('SELECT COUNT(*) AS total FROM products').get().total;

console.log('Database recreada correctamente.');
console.log(`Categorías: ${categories}`);
console.log(`Productos: ${products}`);
