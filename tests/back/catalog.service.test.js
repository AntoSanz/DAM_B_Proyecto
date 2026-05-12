const test = require('node:test');
const assert = require('node:assert/strict');

const { initializeDatabase } = require('../../backend/src/config/db');
const catalogService = require('../../backend/src/services/catalog.service');

test.before(() => {
  initializeDatabase();
});

test('getCategories devuelve categorias del catalogo', () => {
  const categories = catalogService.getCategories();

  assert.equal(Array.isArray(categories), true);
  assert.equal(categories.length > 0, true);
  assert.equal(typeof categories[0].id, 'number');
  assert.equal(typeof categories[0].name, 'string');
});

test('getProductsByCategory devuelve productos de la categoria y mapea inStock boolean', () => {
  const categories = catalogService.getCategories();
  const categoryId = categories[0].id;

  const products = catalogService.getProductsByCategory(categoryId);

  assert.equal(Array.isArray(products), true);
  if (products.length > 0) {
    assert.equal(products.every((p) => p.categoryId === categoryId), true);
    assert.equal(typeof products[0].inStock, 'boolean');
    assert.equal(typeof products[0].price, 'number');
  }
});