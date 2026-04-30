// Controlador de checkout: crea un pedido y lo registra en el historial
const Order = require('../models/order.model');
const HistoryOrder = require('../models/history_order.model');
const { db } = require('../config/db');

function checkout(req, res) {
  const { user_id, items } = req.body || {};

  if (!user_id || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ ok: false, message: 'user_id e items son obligatorios.' });
  }

  try {
    const detalles = items
      .map((item) => `${item.name} x${item.quantity} (${Number(item.price).toFixed(2)} €)`)
      .join(', ');

    // Transacción: crear order + history_order de forma atómica
    const transaction = db.transaction(() => {
      const order = Order.create({ user_id, detalles });
      const historyEntry = HistoryOrder.create({ user_id, order_id: order.id });
      return { order, historyEntry };
    });

    const { order, historyEntry } = transaction();

    return res.status(201).json({ ok: true, order, historyEntry });
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'Error al procesar el pedido.' });
  }
}

module.exports = { checkout };
