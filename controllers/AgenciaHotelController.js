//Importo modelo de datos
const Agencia = require("../models/AgenciaModel");

const AgenciaHotelController = {};

AgenciaHotelController.getAll = (req, res) => {
    res.json(AgenciaModel.findAll());
};

AgenciaHotelController.getByHotel = (req, res) => {
    const Hotel = req.params.Hotel;
    res.json(Agencia.findByHotel(Hotel));
};



module.exports = AgenciaHotelController;