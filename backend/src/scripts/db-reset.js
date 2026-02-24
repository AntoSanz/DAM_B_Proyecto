const { initializeDatabase, db } = require('../config/db');

initializeDatabase();

db.exec(`
  DELETE FROM users;
  DELETE FROM products;
  DELETE FROM categories;
  DELETE FROM sqlite_sequence WHERE name = 'users';
`);

initializeDatabase();

const categories = db.prepare('SELECT COUNT(*) AS total FROM categories').get().total;
const products = db.prepare('SELECT COUNT(*) AS total FROM products').get().total;

console.log('Datos de base de datos reseteados correctamente.');
console.log(`Categorías: ${categories}`);
console.log(`Productos: ${products}`);
