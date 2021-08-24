const express = require('express');
const router = express.Router();

const accessoryService = require('../services/accessoryService');


router.get('/accessories/create', (req,res) => {
    res.render('createAccessory', {title: 'CreateAccessory'})
});

router.get('/:productId/attach', (req,res) => {
    res.render('attachAccessory', {title: 'AttachAccessory'})
});

router.post('/accessories/create', (req, res) => {

    let data = req.body;

    accessoryService.createAccessory(data);

    res.redirect('/products');
});


module.exports = router;
