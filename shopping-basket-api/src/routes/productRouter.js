const productController = require('../controllers/productController');
const Product = require('../models/Products');

const productRouters = [
    {
        method: 'GET',
        url: '/api/products',
        handler: productController.allProducts
    },
    {
        method: 'POST',
        url: '/api/products',
        handler: productController.addProduct
    },
    {
        method: 'DELETE',
        url: '/api/products/:product_id',
        handler: productController.deleteProduct
    },
    {
        method: 'PUT',
        url: '/api/products/:product_id',
        handler: productController.updateProduct
    },
    {
        method: 'GET',
        url: '/api/products/:product_id',
        handler: productController.singleProduct
    }
]

module.exports = productRouters;