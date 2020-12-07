const usuario = require('../models/usuario.model.js');
// Create and save a new Product
exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "User data can not be empty"
        });
    }
    // Create a new Product with request's data
    const user = new usuario({
        name: req.body.name,
        mail: req.body.mail,
        pass: req.body.pass,
        country: req.body.country,
        phone: req.body.phone
    });
    // Save the Product in the database
    user.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while creating the record."
            });
        });
};
// Retrieve and list all Products
exports.findAll = (req, res) => {
    console.log("Listing all products ... soon!");
};
// Get a single Product by its id
exports.findOne = (req, res) => {
    const user = usuario.find({
        mail: req.body.mail
    })
};

exports.login = (req, res) => {   
    usuario.find({ mail: req.body.mail, pass: req.body.pass }).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "1user or pass incorrect:" + req.params.mail
            });
        }
        console.log(user[0])
        res.status(200).send(user[0].body);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user or pass incorrect:" + req.params.mail
            });
        }
        return res.status(500).send({
            message: "Something wrong ocurred while retrieving the record with id:"
                + req.params.id
        });
    });

};
// Update a Product by its id
exports.update = (req, res) => {
    console.log("Updating a particular product ... soon!");
};
// Delete a Product by its id
exports.delete = (req, res) => {
    console.log("Deleting a particular product ... soon!");
};