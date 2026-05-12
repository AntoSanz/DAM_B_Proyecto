const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../../backend/src/app');
const { initializeDatabase } = require('../../backend/src/config/db');

let server;
let baseUrl;

async function request(path) {
  const response = await fetch(`${baseUrl}${path}`);
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

test('GET /api/categories devuelve lista de categorias', async () => {
  const { response, body } = await request('/api/categories');
  assert.equal(response.status, 200);
  assert.equal(Array.isArray(body), true);
  assert.equal(body.length > 0, true);
  assert.equal(typeof body[0].id, 'number');
});

test('GET /api/categories/:id/products devuelve productos de la categoria', async () => {
  const categories = await request('/api/categories');
  const categoryId = categories.body[0].id;

  const { response, body } = await request(`/api/categories/${categoryId}/products`);
  assert.equal(response.status, 200);
  assert.equal(Array.isArray(body), true);

  if (body.length > 0) {
    assert.equal(body.every((p) => p.categoryId === categoryId), true);
    assert.equal(typeof body[0].inStock, 'boolean');
  }
});