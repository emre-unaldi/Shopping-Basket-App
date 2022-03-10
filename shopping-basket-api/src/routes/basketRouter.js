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
        method: 'DELETE',
        url: '/api/baskets/:basket_id',
        handler: basketController.deleteBasket
    },
    {
        method: 'PUT',
        url: '/api/baskets/:basket_id',
        handler: basketController.updateBasket
    },
    {
        method: 'GET',
        url: '/api/baskets/:basket_id',
        handler: basketController.singleBasket
    }
]

module.exports = basketRouters;