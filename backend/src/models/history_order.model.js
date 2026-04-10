// Modelo para historial de pedidos

const { db } = require('../config/db');

const HistoryOrder = {
    getByUserId(user_id) {
      return db.prepare('SELECT * FROM history_orders WHERE user_id = ?').all(user_id);
    },
  getAll() {
    return db.prepare('SELECT * FROM history_orders').all();
  },

  getById(id) {
    return db.prepare('SELECT * FROM history_orders WHERE id = ?').get(id);
  },

  create(order) {
    const { user_id, order_id } = order;
    const stmt = db.prepare('INSERT INTO history_orders (user_id, order_id) VALUES (?, ?)');
    const result = stmt.run(user_id, order_id);
    return { id: result.lastInsertRowid, user_id, order_id };
  },

  update(id, order) {
    const { user_id, order_id } = order;
    db.prepare('UPDATE history_orders SET user_id = ?, order_id = ? WHERE id = ?').run(user_id, order_id, id);
    return { id, user_id, order_id };
  },

  delete(id) {
    db.prepare('DELETE FROM history_orders WHERE id = ?').run(id);
    return { id };
  }
};

module.exports = HistoryOrder;
