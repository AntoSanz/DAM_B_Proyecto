// Pruebas para el CRUD de historial de pedidos
const request = require('supertest');
const app = require('../src/app');

describe('CRUD Historial de Pedidos', () => {
  let createdId;
  const testOrder = {
    user_id: 1,
    order_id: 1
  };

  it('Crea un historial de pedido', async () => {
    const res = await request(app)
      .post('/api/history-orders')
      .send(testOrder)
      .expect(201);
    expect(res.body).toHaveProperty('id');
    createdId = res.body.id;
    expect(res.body.user_id).toBe(testOrder.user_id);
    expect(res.body.order_id).toBe(testOrder.order_id);
  });

  it('Obtiene todos los historiales', async () => {
    const res = await request(app)
      .get('/api/history-orders')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('Obtiene un historial por ID', async () => {
    const res = await request(app)
      .get(`/api/history-orders/${createdId}`)
      .expect(200);
    expect(res.body).toHaveProperty('id', createdId);
  });

  it('Actualiza un historial', async () => {
    const res = await request(app)
      .put(`/api/history-orders/${createdId}`)
      .send({ ...testOrder, user_id: 1, order_id: 1 })
      .expect(200);
    expect(res.body.user_id).toBe(1);
    expect(res.body.order_id).toBe(1);
  });

  it('Obtiene historial de pedidos por usuario', async () => {
    // Crear dos historiales para el usuario 2
    const order1 = await request(app)
      .post('/api/history-orders')
      .send({ user_id: 2, order_id: 2 })
      .expect(201);
    const order2 = await request(app)
      .post('/api/history-orders')
      .send({ user_id: 2, order_id: 3 })
      .expect(201);

    const res = await request(app)
      .get('/api/history-orders/user/2')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
    expect(res.body.some(o => o.order_id === 2)).toBe(true);
    expect(res.body.some(o => o.order_id === 3)).toBe(true);

    // Limpieza
    await request(app).delete(`/api/history-orders/${order1.body.id}`);
    await request(app).delete(`/api/history-orders/${order2.body.id}`);
  });
});
