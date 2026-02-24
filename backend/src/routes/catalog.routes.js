const express = require('express');
const catalogController = require('../controllers/catalog.controller');

const router = express.Router();

router.get('/categories', catalogController.getCategories);
router.get('/categories/:id/products', catalogController.getProductsByCategory);

module.exports = router;