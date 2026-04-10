// Rutas para historial de pedidos
const express = require('express');
const router = express.Router();
const historyOrderController = require('../controllers/history_order.controller');

router.get('/', historyOrderController.getAllHistoryOrders);
// Historial por usuario
router.get('/user/:user_id', historyOrderController.getHistoryOrdersByUserId);
router.get('/:id', historyOrderController.getHistoryOrderById);
router.post('/', historyOrderController.createHistoryOrder);
router.put('/:id', historyOrderController.updateHistoryOrder);
router.delete('/:id', historyOrderController.deleteHistoryOrder);

module.exports = router;
