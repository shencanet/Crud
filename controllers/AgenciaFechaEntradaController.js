//Importo modelo de datos
const Checkin = require("../models/AgenciaModel");

const AgenciaFechaEntradaController = {};

AgenciaFechaEntradaController.getAll = (req, res) => {
    res.json(Checkin.findAll());
};

AgenciaFechaEntradaController.getbyEntrada = (req, res) => {
    const Entrada = req.params.Entrada;
    res.json(Checkin.findByEntrada(Entrada));
};



module.exports = AgenciaFechaEntradaController;