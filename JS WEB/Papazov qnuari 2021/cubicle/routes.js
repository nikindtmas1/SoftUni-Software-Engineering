const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');


router.use(productController)

module.exports = router;