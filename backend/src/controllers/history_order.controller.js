const getHistoryOrdersByUserId = async (req, res) => {
  try {
    const orders = await historyOrderService.getHistoryOrdersByUserId(req.params.user_id);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial del usuario' });
  }
};
// Controlador para historial de pedidos
const historyOrderService = require('../services/history_order.service');

const getAllHistoryOrders = async (req, res) => {
  try {
    const orders = await historyOrderService.getAllHistoryOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial de pedidos' });
  }
};

const getHistoryOrderById = async (req, res) => {
  try {
    const order = await historyOrderService.getHistoryOrderById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Historial no encontrado' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial' });
  }
};

const createHistoryOrder = async (req, res) => {
  try {
    const newOrder = await historyOrderService.createHistoryOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el historial' });
  }
};

const updateHistoryOrder = async (req, res) => {
  try {
    const updatedOrder = await historyOrderService.updateHistoryOrder(req.params.id, req.body);
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el historial' });
  }
};

const deleteHistoryOrder = async (req, res) => {
  try {
    await historyOrderService.deleteHistoryOrder(req.params.id);
    res.json({ message: 'Historial eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el historial' });
  }
};

module.exports = {
  getAllHistoryOrders,
  getHistoryOrderById,
  createHistoryOrder,
  updateHistoryOrder,
  deleteHistoryOrder,
  getHistoryOrdersByUserId,
};
