const test = require('node:test');
const assert = require('node:assert/strict');

const { initializeDatabase, db } = require('../../backend/src/config/db');
const historyService = require('../../backend/src/services/history_order.service');

function cleanTables() {
  db.exec(`
    DELETE FROM history_orders;
    DELETE FROM orders;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('users','orders','history_orders');
  `);
}

function createUser(email = 'u@test.com') {
  const result = db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)').run(email, 'plain123', 'User');
  return result.lastInsertRowid;
}

function createOrder(userId, detalles = 'Pedido test') {
  const result = db.prepare('INSERT INTO orders (user_id, detalles) VALUES (?, ?)').run(userId, detalles);
  return result.lastInsertRowid;
}

test.before(() => {
  initializeDatabase();
});

test.beforeEach(() => {
  cleanTables();
});

test('create/getById/getAll funcionan para historial', async () => {
  const userId = createUser('h1@test.com');
  const orderId = createOrder(userId, 'Item A');

  const created = await historyService.createHistoryOrder({ user_id: userId, order_id: orderId });
  assert.equal(typeof created.id, 'number');

  const byId = await historyService.getHistoryOrderById(created.id);
  assert.equal(byId.id, created.id);

  const all = await historyService.getAllHistoryOrders();
  assert.equal(all.length > 0, true);
});

test('update actualiza user_id y order_id', async () => {
  const userA = createUser('a@test.com');
  const userB = createUser('b@test.com');
  const orderA = createOrder(userA, 'Pedido A');
  const orderB = createOrder(userB, 'Pedido B');

  const created = await historyService.createHistoryOrder({ user_id: userA, order_id: orderA });
  const updated = await historyService.updateHistoryOrder(created.id, { user_id: userB, order_id: orderB });

  assert.equal(updated.id, created.id);
  assert.equal(updated.user_id, userB);
  assert.equal(updated.order_id, orderB);
});

test('delete elimina historial', async () => {
  const userId = createUser('del@test.com');
  const orderId = createOrder(userId, 'Delete');
  const created = await historyService.createHistoryOrder({ user_id: userId, order_id: orderId });

  await historyService.deleteHistoryOrder(created.id);
  const deleted = await historyService.getHistoryOrderById(created.id);
  assert.equal(deleted == null, true);
});

test('getHistoryOrdersByUserId devuelve detalle con join a orders', async () => {
  const userId = createUser('join@test.com');
  const orderId = createOrder(userId, 'Juego X x1');
  await historyService.createHistoryOrder({ user_id: userId, order_id: orderId });

  const rows = await historyService.getHistoryOrdersByUserId(userId);
  assert.equal(rows.length > 0, true);
  assert.equal(rows[0].user_id, userId);
  assert.equal(typeof rows[0].detalles, 'string');
});