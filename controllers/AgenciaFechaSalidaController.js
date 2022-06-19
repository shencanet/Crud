//Importo modelo de datos
const Checkout = require("../models/AgenciaModel");

const AgenciaFechaSalidaController = {};

AgenciaFechaSalidaController.getAll = (req, res) => {
    res.json(Checkout.findAll());
};

AgenciaFechaSalidaController.getBySalida = (req, res) => {
    const Salida = req.params.Salida;
    res.json(Checkout.findBySalida(Salida));
};

module.exports = AgenciaFechaSalidaController;