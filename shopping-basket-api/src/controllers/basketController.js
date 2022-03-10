const fastify = require('fastify')();
const createError = require('http-errors');

// Models
const Baskets = require('../models/Baskets');

// basket listeleme endpointi
const allBaskets = async (req, reply) => {
    try {
        const getBaskets = await Baskets.find({})
        return getBaskets
    } catch (err) {
        throw createError(400, 'Failed to fetch records. Error : ' + err)
    }
}

// basket ekleme endpointi
const addBasket = async (req, reply) => {
    try {
        const addBasket = new Baskets({
            name: req.body.name,
            price: req.body.price,
            unit: req.body.unit,
            qty: req.body.qty
        })
        
        return await addBasket.save()
    } catch (err) {
        throw createError(400, 'Failed to create record. Error : ' + err)
    }
}

// basket silme endpointi
const deleteBasket = async (req, reply) => {
    try {
        const basketId = req.params.basket_id
        const basket = Baskets.findByIdAndRemove(basketId)
        return basket
    } catch (err) {
        throw createError(400, 'Failed to delete record. Error : ' + err)
    }
}

// basket güncelleme endpointi
const updateBasket = async (req, reply) => {
    try {
        const basket = Baskets.findByIdAndUpdate(
            req.params.basket_id,
            req.body,
            {
                new: true
            }
        )

        return basket
    } catch (error) {
        throw createError(400, 'The record could not be updated. Error : ' + err)
    }
}

// verilen id ye göre basket getirme endpointi
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
    addBasket,
    deleteBasket,
    updateBasket
}