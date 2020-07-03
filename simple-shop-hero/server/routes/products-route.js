const express = require('express');
const productsController = require('../controllers/products-controller.js');
const router = express.Router();
router.get('/all', productsController.productsGetAll);
module.exports = router;