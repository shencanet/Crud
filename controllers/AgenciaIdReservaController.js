//Importo modelo de datos
const Agencia = require("../models/AgenciaModel");

const AgenciaIdReservaController = {};

AgenciaIdReservaController.getAll = (req, res) => {
    res.json(AgenciaModel.findAll());
};

AgenciaIdReservaController.getByIdReserva = (req, res) => {
    const IdReserva = req.params.IdReserva;
    res.json(Agencia.finByIdReserva(IdReserva));
};



module.exports = AgenciaIdReservaController;