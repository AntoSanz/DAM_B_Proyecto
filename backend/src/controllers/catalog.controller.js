const catalogService = require('../services/catalog.service');

function getCategories(_req, res) {
  res.json(catalogService.getCategories());
}

function getProductsByCategory(req, res) {
  const categoryId = Number(req.params.id);
  res.json(catalogService.getProductsByCategory(categoryId));
}

module.exports = {
  getCategories,
  getProductsByCategory,
};