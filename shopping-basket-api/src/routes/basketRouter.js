const basketController = require('../controllers/basketController');
const Basket = require('../models/Baskets');

const basketRouters = [
    {
        method: 'GET',
        url: '/api/baskets',
        handler: basketController.allBaskets
    },
    {
        method: 'POST',
        url: '/api/baskets',
        handler: basketController.addBasket
    },
    {
        method: 'GET',
        url: '/api/baskets/:basket_id',
        handler: basketController.singleBasket
    }
]

module.exports = basketRouters;