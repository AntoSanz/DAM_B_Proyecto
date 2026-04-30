// OrdersDm.js
// Data manager para historial de pedidos
const axios = require('axios');

const API_URL = '/api/history-orders';

const OrdersDm = {
  async getOrders() {
    const res = await axios.get(API_URL);
    return res.data;
  },

  async getOrdersById(id) {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  },

  async getOrdersByUserId(user_id) {
    const res = await axios.get(`${API_URL}/user/${user_id}`);
    return res.data;
  },

  async createOrder(order) {
    const res = await axios.post(API_URL, order);
    return res.data;
  },

  async updateOrder(id, order) {
    const res = await axios.put(`${API_URL}/${id}`, order);
    return res.data;
  },

  async deleteOrder(id) {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  }
};

module.exports = OrdersDm;
