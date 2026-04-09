const fs = require('fs');
const path = require('path');

const usersSeedPath = path.resolve(__dirname, '../../database/seeds/users.seed.sql');
const catalogSeedPath = path.resolve(__dirname, '../../database/seeds/catalog.seed.sql');
const ordersSeedPath = path.resolve(__dirname, '../../database/seeds/orders.seed.sql');
const historyOrdersSeedPath = path.resolve(__dirname, '../../database/seeds/history_orders.seed.sql');

// Verificar existencia de archivos seed
[usersSeedPath, catalogSeedPath, ordersSeedPath, historyOrdersSeedPath].forEach((seedPath) => {
  if (!fs.existsSync(seedPath)) {
    throw new Error(`No se encontró el archivo seed: ${seedPath}`);
  }
});

const { initializeDatabase, db } = require('../config/db');

// Inicializar y limpiar la base de datos
initializeDatabase();

db.exec('PRAGMA foreign_keys = OFF;');
db.exec(`
  DELETE FROM history_orders;
  DELETE FROM orders;
  DELETE FROM users;
  DELETE FROM products;
  DELETE FROM categories;
  DELETE FROM sqlite_sequence WHERE name = 'users';
  DELETE FROM sqlite_sequence WHERE name = 'orders';
  DELETE FROM sqlite_sequence WHERE name = 'history_orders';
`);
db.exec('PRAGMA foreign_keys = ON;');

// Crear tablas si no existen
initializeDatabase();

// Poblar tablas en orden correcto
const usersSql = fs.readFileSync(usersSeedPath, 'utf8');
db.exec(usersSql);

const catalogSql = fs.readFileSync(catalogSeedPath, 'utf8');
db.exec(catalogSql);

const ordersSql = fs.readFileSync(ordersSeedPath, 'utf8');
db.exec(ordersSql);

const historyOrdersSql = fs.readFileSync(historyOrdersSeedPath, 'utf8');
db.exec(historyOrdersSql);

console.log('Bootstrap de base de datos completado.');
console.log('Usuarios:', db.prepare('SELECT COUNT(*) AS total FROM users').get().total);
console.log('Categorías:', db.prepare('SELECT COUNT(*) AS total FROM categories').get().total);
console.log('Productos:', db.prepare('SELECT COUNT(*) AS total FROM products').get().total);
console.log('Pedidos:', db.prepare('SELECT COUNT(*) AS total FROM orders').get().total);
console.log('Historial de pedidos:', db.prepare('SELECT COUNT(*) AS total FROM history_orders').get().total);
