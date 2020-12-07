module.exports = (app) => {
    const usuario = require('../controllers/usuario.controller.js');
    // Create a new Product
    app.post('/usuarios', usuario.create);
    // List all Products
    app.get('/usuarios', usuario.findAll);
    //login with mail an pass
    app.post('/loginUser', usuario.login);
    // Get a single Product by id
    app.get('/usuarios/:id', usuario.findOne);
    // Update a Product by id
    app.put('/usuarios/:id', usuario.update);
    // Delete a Product by id
    app.delete('/usuarios/:id', usuario.delete);
}