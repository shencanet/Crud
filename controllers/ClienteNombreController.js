//Importo modelo de datos
const User = require('../models/MovieModel');

const ClienteNombreController = {};

ClienteNombreController.getAll = (req, res) => {
    res.json(User.findAll());
};

ClienteNombreController.getByNombre = (req, res) => {
    const Nombre = req.params.Nombre;
    res.json(User.findByNombre(Nombre));
};



module.exports = ClienteNombreController;