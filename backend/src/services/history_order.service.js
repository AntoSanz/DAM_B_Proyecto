const getHistoryOrdersByUserId = (user_id) => {
  return HistoryOrder.getByUserId(user_id);
};
// Servicios para historial de pedidos
const HistoryOrder = require('../models/history_order.model');

const getAllHistoryOrders = async () => {
  return await HistoryOrder.getAll();
};

const getHistoryOrderById = async (id) => {
  return await HistoryOrder.getById(id);
};

const createHistoryOrder = async (order) => {
  return await HistoryOrder.create(order);
};

const updateHistoryOrder = async (id, order) => {
  return await HistoryOrder.update(id, order);
};

const deleteHistoryOrder = async (id) => {
  return await HistoryOrder.delete(id);
};

module.exports = {
  getAllHistoryOrders,
  getHistoryOrderById,
  createHistoryOrder,
  updateHistoryOrder,
  deleteHistoryOrder,
  getHistoryOrdersByUserId,
};
