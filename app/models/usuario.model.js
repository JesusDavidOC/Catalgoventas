const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    mail: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 8
    },
    pass: {
        type: String,
        min: 10,
        required: true,
    },
    country: {
        type: String,
        min: 4,
        required: true,
    },
    phone: {
        type: Number,
        unique: true
    },
    account: {
        type: { String, enum: ['Moroso', 'Paz y salvo'] }
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Usuario', UsuarioSchema);