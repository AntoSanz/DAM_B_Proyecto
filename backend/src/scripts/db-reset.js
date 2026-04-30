const { initializeDatabase, db } = require('../config/db');

initializeDatabase();

// Desactivar claves foráneas temporalmente para limpiar todo sin errores
try {
  db.exec('PRAGMA foreign_keys = OFF;');

  // Eliminar datos de tablas en orden correcto (dependencias)
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
} catch (e) {
  db.exec('PRAGMA foreign_keys = ON;');
  throw e;
}

initializeDatabase();

const categories = db.prepare('SELECT COUNT(*) AS total FROM categories').get().total;
const products = db.prepare('SELECT COUNT(*) AS total FROM products').get().total;
const orders = db.prepare('SELECT COUNT(*) AS total FROM orders').get().total;
const historyOrders = db.prepare('SELECT COUNT(*) AS total FROM history_orders').get().total;

console.log('Datos de base de datos reseteados correctamente.');
console.log(`Categorías: ${categories}`);
console.log(`Productos: ${products}`);
console.log(`Pedidos: ${orders}`);
console.log(`Historial de pedidos: ${historyOrders}`);
