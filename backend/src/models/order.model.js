// Modelo para pedidos
const { db } = require('../config/db');

const Order = {
  create({ user_id, detalles }) {
    const stmt = db.prepare('INSERT INTO orders (user_id, detalles) VALUES (?, ?)');
    const result = stmt.run(user_id, detalles);
    return db.prepare('SELECT * FROM orders WHERE id = ?').get(result.lastInsertRowid);
  },

  getById(id) {
    return db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
  },

  getByUserId(user_id) {
    return db.prepare('SELECT * FROM orders WHERE user_id = ? ORDER BY fecha DESC').all(user_id);
  },
};

module.exports = Order;
