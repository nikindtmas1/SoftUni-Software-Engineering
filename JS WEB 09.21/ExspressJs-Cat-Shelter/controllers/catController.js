const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');
const path = require('path');
const bodyParser = require('body-parser');

let filesData = require('../config/cats.json');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/add-cat', (req, res) => {

    res.render('addCat');

});

router.post('/add-cat', (req, res) => {

    console.log(req.method);
    console.log(req.body);

    let data = bodyParser(req.body);

    let cat = new Cat(
        uniqid(),
        data.name,
        data.description,
        data.breed
    )
    console.log('You are posted');
    
    filesData.push(cat);

    fs.writeFile(path.join(__dirname, '/../config/cats.json'), JSON.stringify(filesData), (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
    res.redirect('/')

});

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

function validateProduct(req, res, next){
    let isValid = true;

    if( req.body.name.length < 2 ){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }
}

module.exports = router;