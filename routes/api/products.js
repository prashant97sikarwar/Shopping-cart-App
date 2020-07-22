const Product = require('../../db').Product
const route = require('express').Router();

route.get('/', (req,res) => {
    // get all products
})

route.post('/',(req,res) => {
    //add a anew product
})

exports = module.exports = route
