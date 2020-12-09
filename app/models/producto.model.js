const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        min: 10
    },
    expiration: Date
}, {
    timestamps: true
});
module.exports = mongoose.model('Producto', ProductoSchema);