const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
    name: {
        type: String,
        maxlength: [30, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [2, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
        required: [true, '`{PATH}` alanı zorunludur.'],
        trim: true
    },
    price: {
        type: String,
        max: [9999999, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH})den küçük olmalıdır.'],
        min: [1, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH})den büyük olmalıdır.'],
        required: [true, '`{PATH}` alanı zorunludur.'],
        trim: true
    },
    unit: {
        type: String,
        maxlength: [8, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
        required: [true, '`{PATH}` alanı zorunludur.'],
        trim: true
    },
    qty: {
        type: String,
        max: [100, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH})den küçük olmalıdır.'],
        min: [1, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH})den büyük olmalıdır.'],
        default: 1,
        trim: true
    }
},{
    collection: 'Baskets',
    timestamps: true
});

module.exports = mongoose.model('Baskets',BasketSchema);
