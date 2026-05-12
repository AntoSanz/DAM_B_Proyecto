const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../../backend/src/app');
const { initializeDatabase, db } = require('../../backend/src/config/db');

let server;
let baseUrl;

function cleanTables() {
  db.exec(`
    DELETE FROM history_orders;
    DELETE FROM orders;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('users','orders','history_orders');
  `);
}

function createUser(email = 'checkout@test.com') {
  const result = db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)').run(email, 'secret123', 'Checkout User');
  return result.lastInsertRowid;
}

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const body = await response.json().catch(() => ({}));
  return { response, body };
}

test.before(() => {
  initializeDatabase();
  server = app.listen(0);
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.after(() => {
  server.close();
});

test.beforeEach(() => {
  cleanTables();
});

test('POST /api/checkout valida payload requerido', async () => {
  const { response, body } = await request('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: null, items: [] }),
  });

  assert.equal(response.status, 400);
  assert.equal(body.ok, false);
});

test('POST /api/checkout crea order e history_order', async () => {
  const userId = createUser();

  const { response, body } = await request('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId,
      items: [
        { name: 'Juego A', quantity: 2, price: 19.99 },
        { name: 'Juego B', quantity: 1, price: 9.99 },
      ],
    }),
  });

  assert.equal(response.status, 201);
  assert.equal(body.ok, true);
  assert.equal(typeof body.order.id, 'number');
  assert.equal(typeof body.historyEntry.id, 'number');

  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(body.order.id);
  const history = db.prepare('SELECT * FROM history_orders WHERE id = ?').get(body.historyEntry.id);

  assert.equal(order.user_id, userId);
  assert.equal(history.order_id, order.id);
});

test('POST /api/checkout devuelve 500 cuando falla la transaccion (FK)', async () => {
  const { response, body } = await request('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: 999999,
      items: [{ name: 'Juego', quantity: 1, price: 5 }],
    }),
  });

  assert.equal(response.status, 500);
  assert.equal(body.ok, false);
});