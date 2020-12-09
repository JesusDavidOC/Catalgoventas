const mongoose = require('mongoose');


const ProductoSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
<<<<<<< HEAD
    },
    description: {
        type: String
    },
=======
    },   
>>>>>>> e84c394a6e730c80bbb0f49ee60ef218ea90c639
    price: {
        type: Number,
        min: 10
    },
    amount: Number,
}, {
    timestamps: true
});
module.exports = mongoose.model('Producto', ProductoSchema);