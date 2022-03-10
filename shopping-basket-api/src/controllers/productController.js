const fastify = require('fastify')();
const createError = require('http-errors');

// Models
const Products = require('../models/Products');

// product listeleme endpointi
const allProducts = async (req, reply) => {
    try {
        const getProducts = await Products.find({})
        return getProducts
    } catch (err) {
        throw createError(400, 'Failed to fetch records. Error : ' + err)
    }
}

// product ekleme endpointi
const addProduct = async (req, reply) => {
    try {
        const addProduct = new Products({
            name: req.body.name,
            price: req.body.price,
            unit: req.body.unit,
            qty: req.body.qty
        })
        
        return await addProduct.save()
    } catch (err) {
        throw createError(400, 'Failed to create record. Error : ' + err)
    }
}

// product silme endpointi
const deleteProduct = async (req, reply) => {
    try {
        const productId = req.params.product_id
        const product = Products.findByIdAndRemove(productId)
        return product
    } catch (err) {
        throw createError(400, 'Failed to delete record. Error : ' + err)
    }
}

// product güncelleme endpointi
const updateProduct = async (req, reply) => {
    try {
        const product = Products.findByIdAndUpdate(
            req.params.product_id,
            req.body,
            {
                new: true
            }
        )

        return product
    } catch (error) {
        throw createError(400, 'The record could not be updated. Error : ' + err)
    }
}

// verilen id ye göre product getirme endpointi
const singleProduct = async (req, reply) => {
    try {
        const productId = req.params.product_id
        const product = await Products.findById(productId)
        return product
    } catch (err) {
        throw (400, 'Could not fetch the specified record. Error : ' + err)
    }
}

module.exports = {
    allProducts,
    singleProduct,
    addProduct,
    deleteProduct,
    updateProduct
}