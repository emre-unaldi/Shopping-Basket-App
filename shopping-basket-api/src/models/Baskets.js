const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
    orderList: {
        type: Object,
        maxlength: [4, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
        required: [true, '`{PATH}` alanı zorunludur.']
    },
    totalPrice: {
        type: Number,
        max: [9999999, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH})den küçük olmalıdır.'],
        min: [0, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH})den büyük olmalıdır.']
    }
},{
    collection: 'Baskets',
    timestamps: true
});

module.exports = mongoose.model('Baskets',BasketSchema);
