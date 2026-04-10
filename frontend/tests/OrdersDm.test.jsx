// OrdersDm.test.jsx

const OrdersDm = require('../src/data-managers/OrdersDm');
const axios = require('axios');

jest.mock('axios');

describe('OrdersDm', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getOrders llama a /api/history-orders', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1 }] });
    const data = await OrdersDm.getOrders();
    expect(axios.get).toHaveBeenCalledWith('/api/history-orders');
    expect(data).toEqual([{ id: 1 }]);
  });

  test('getOrdersById llama a /api/history-orders/:id', async () => {
    axios.get.mockResolvedValue({ data: { id: 2 } });
    const data = await OrdersDm.getOrdersById(2);
    expect(axios.get).toHaveBeenCalledWith('/api/history-orders/2');
    expect(data).toEqual({ id: 2 });
  });

  test('getOrdersByUserId llama a /api/history-orders/user/:user_id', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 3 }] });
    const data = await OrdersDm.getOrdersByUserId(5);
    expect(axios.get).toHaveBeenCalledWith('/api/history-orders/user/5');
    expect(data).toEqual([{ id: 3 }]);
  });

  test('createOrder llama a POST /api/history-orders', async () => {
    axios.post.mockResolvedValue({ data: { id: 4 } });
    const data = await OrdersDm.createOrder({ user_id: 1, order_id: 2 });
    expect(axios.post).toHaveBeenCalledWith('/api/history-orders', { user_id: 1, order_id: 2 });
    expect(data).toEqual({ id: 4 });
  });

  test('updateOrder llama a PUT /api/history-orders/:id', async () => {
    axios.put.mockResolvedValue({ data: { id: 5 } });
    const data = await OrdersDm.updateOrder(5, { user_id: 2, order_id: 3 });
    expect(axios.put).toHaveBeenCalledWith('/api/history-orders/5', { user_id: 2, order_id: 3 });
    expect(data).toEqual({ id: 5 });
  });

  test('deleteOrder llama a DELETE /api/history-orders/:id', async () => {
    axios.delete.mockResolvedValue({ data: { id: 6 } });
    const data = await OrdersDm.deleteOrder(6);
    expect(axios.delete).toHaveBeenCalledWith('/api/history-orders/6');
    expect(data).toEqual({ id: 6 });
  });
});
