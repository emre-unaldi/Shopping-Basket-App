const fastify = require('fastify')();
const createError = require('http-errors');

// Models
const Baskets = require('../models/Baskets');

const allBaskets = async (req, reply) => {
    try {
        const getBaskets = await Baskets.find({})
        return getBaskets
    } catch (err) {
        throw createError(400, 'Failed to fetch records. Error : ' + err)
    }
}

const addBasket = async (req, reply) => {
    try {
        const addBasket = new Baskets({
            orderList: req.body.orderList,
            totalPrice: req.body.totalPrice
        })
        
        return await addBasket.save()
    } catch (err) {
        throw createError(400, 'Failed to create record. Error : ' + err)
    }
}

const singleBasket = async (req, reply) => {
    try {
        const basketId = req.params.basket_id
        const basket = await Baskets.findById(basketId)
        return basket
    } catch (err) {
        throw (400, 'Could not fetch the specified record. Error : ' + err)
    }
}

module.exports = {
    allBaskets,
    singleBasket,
    addBasket
}