//Importo modelo de datos
const Correo = require('../models/MovieModel');

const ClienteEmailController = {};

ClienteEmailController.getAll = (req, res) => {
    res.json(Correo.findAll());
};

ClienteEmailController.getByEmail = (req, res) => {
    const Email = req.params.Email;
    res.json(Correo.findByEmail(Email));
}


module.exports = ClienteEmailController;