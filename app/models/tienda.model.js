const mongoose = require('mongoose');
const producto = require('./producto.model.js').schema;
const user = require('./usuario.model.js');

const CategoriaSchema = mongoose.Schema({
    name: {
        type: String,
        enum: ["Moda", "Tecnologia", "Viveres", "Hogar", "Licores", "Otro"],
        required: true
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

TiendaSchema.statics.findByAdmin = async(token) => {
    // Search for a user by email and password.       
    try {
        const tienda = await Store.findOne({ 'admin.token': token })
        return tienda
    } catch (error) {
        console.log(error)
    }
}

TiendaSchema.statics.updateAdminWithMail = async(mail, token) => {
    // Search for a user by email and password.       
    try {
        const tienda = await Store.findOneAndUpdate({ "admin.mail": mail }, {
            "$set": {
                'admin.token': token
            }
        })
        return tienda
    } catch (error) {
        console.log(error)
    }
}

TiendaSchema.statics.updateProductos = async(productoa, token) => {
    console.log(token)
        // Search for a user by email and password.    
    var temp = Store.findByAdmin(token)
    try {
        console.log(token)
        return temp
            //return tienda
    } catch (error) {
        console.log(error)
    }
}

TiendaSchema.statics.guardar = async(store, token) => {
    // Search for a user by email and password.       
    try {
        console.log(token)
        const usuario = await require('./usuario.model.js').findByToken(token);
        store.admin = usuario;
        const st = new Store(store);
        st.save()
        return st
    } catch (error) {
        console.log(error)
    }
}

TiendaSchema.statics.buscarProducto = async(nombreTienda, nombreProducto) => {

    try {
        const tienda = await Store.findOne({ 'name': nombreTienda })
        var producto = tienda.productos
        for (item in producto) {
            if (item.name == nombreProducto) {
                return producto
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const Store = mongoose.model('Tienda', TiendaSchema);

module.exports = Store;