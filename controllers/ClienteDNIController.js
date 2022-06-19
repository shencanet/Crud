//Importo modelo de datos
const Dni = require('../models/MovieModel');

const ClienteDNIController = {};

ClienteDNIController.getAll = (req, res) => {
    res.json(Dni.findAll());
};

ClienteDNIController.getByDNI = (req, res) => {
    const DNI = req.params.DNI;
    res.json(Dni.findByDNI(DNI));
}



module.exports = ClienteDNIController;