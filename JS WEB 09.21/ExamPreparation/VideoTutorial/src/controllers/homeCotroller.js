const express = require('express');
const router = express.Router();

const productService = require('../services/productService');

router.get('/',async (req, res) => {

    let results = await productService.getAllProduct();

    res.render('home',{results});
});

module.exports = router;