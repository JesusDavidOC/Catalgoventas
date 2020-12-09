odule.exports = (app) => {
    const tienda = require('../controllers/tienda.controller.js');
    // Create a new Product
    app.post('/tienda', tienda.create);
    // List all Products
    app.get('/tienda', tienda.findAll);
    // encontramos usuario segun su token actual.    
    //login with mail an pass    
    // Get a single Product by id
    app.get('/tienda/:id', tienda.findOne);
    // Update a Product by id
    app.put('/tienda/:id', tienda.update);
    // Delete a Product by id
    app.delete('/tienda/:id', tienda.delete);
}