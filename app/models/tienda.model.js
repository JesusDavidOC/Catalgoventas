const mongoose = require('mongoose');
const producto = require('./producto.model').schema;
const user = require('./usuario.model').schema;

const CategoriaSchema = mongoose.Schema({
    name: {
        type: String,
        enum: ["Moda", "Tecnologia", "Viveres", "Hogar", "Licores", "Otro"]
    }
})

const TiendaSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    productos: [producto],
    admin: user,
    category: CategoriaSchema,
    country: {
        type: String,
        required: true,        
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Tienda', TiendaSchema);