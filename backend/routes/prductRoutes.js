const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const Product = require('../models/productModel')


//@desc  Fetch all products
//@route  GET/api/products
//@desc  Public
router.get('/', asyncHandler(async (req, res) => {
    //whenever we use a mongoose function it returns a promise so we need to use await
    const products = await Product.find({}) //.find({}) returns everything 
    res.json(products);
}));


//@desc  Fetch a single products with the given id
//@route  GET/api/products/:id
//@desc  Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    }

    else {
        res.status(404).json({ message: 'Product not found' })
    }


}))




module.exports = router