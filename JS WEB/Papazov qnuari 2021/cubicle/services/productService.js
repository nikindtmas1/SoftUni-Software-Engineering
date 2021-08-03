const Cube = require('../models/cubic');
const uniqid = require('uniqid');
const fs = require('fs');
const productsData = require('../config/products.json');
const path = require('path');


function getAll(){
    return productsData;
    
}

function getOne(id){
    return productsData.find(x => x.id == id);
}

function create(data){
    let cube = new Cube(
    uniqid(),
    data.name, 
    data.description, 
    data.imageUrl, 
    data.difficultyLevel
    );

        productsData.push(cube);

    fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
}

module.exports = {
    getAll,
    getOne,
    create
}