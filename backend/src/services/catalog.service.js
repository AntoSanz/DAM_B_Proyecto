const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');

function getCategories() {
  return categoryModel.findAll();
}

function getProductsByCategory(categoryId) {
  return productModel.findByCategoryId(categoryId);
}

module.exports = {
  getCategories,
  getProductsByCategory,
};