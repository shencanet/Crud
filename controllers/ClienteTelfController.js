//Importo modelo de datos
const Movil = require('../models/MovieModel');

const ClienteTelfController = {};

ClienteTelfController.getAll = (req, res) => {
    res.json(Movil.findAll());
};

ClienteTelfController.getByTelefono = (req, res) => {
    const Telefono = req.params.Telefono;
    res.json(Movil.findByTelefono(Telefono));
}


module.exports = ClienteTelfController;