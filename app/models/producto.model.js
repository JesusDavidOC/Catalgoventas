const mongoose = require('mongoose');
const tienda = require('../models/tienda.model');


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
    amount: Number,
}, {
    timestamps: true
});

ProductoSchema.statics.buscarProducto = async(nombreTienda, nombreProducto) => {
    // Search for a user by email and password.       
    try {
        const producto = tienda.buscarProducto(nombreTienda, nombreProducto)
        return producto
    } catch (error) {
        console.log(error)
    }
}
module.exports = mongoose.model('Producto', ProductoSchema);