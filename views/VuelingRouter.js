const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ClienteDNIController = require('../controllers/ClienteDNIController');
const ClienteTelfController = require('../controllers/ClienteTelfController');
const ClienteEmailController = require('../controllers/ClienteEmailController');
const ClienteNombreController = require('../controllers/ClienteNombreController');


const AgenciaIdReservaController = require('../controllers/AgenciaIdReservaController');
const AgenciaHotelController = require('../controllers/AgenciaHotelController');
const AgenciaFechaEntradaController = require('../controllers/AgenciaFechaEntradaController');
const AgenciaFechaSalidaController = require('../controllers/AgenciaFechaSalidaController');




// End-points CRUD movies
router.get('/Clientes', ClienteDNIController.getAll);
router.get('/Clientes/DNI/:DNI', ClienteDNIController.getByDNI);
router.get('/Clientes/Telefono/:Telefono', ClienteTelfController.getByTelefono);
router.get('/Clientes/Email/:Email', ClienteEmailController.getByEmail);
router.get('/Clientes/Nombre/:Nombre', ClienteNombreController.getByNombre);

// End-points CRUD Agencia
router.get('/Agencia/', AgenciaIdReservaController.getAll);
router.get('/Agencia/IdReserva/:IdReserva', AgenciaIdReservaController.getByIdReserva);
router.use('/Agencia/Hotel/:Hotel', AgenciaHotelController.getByHotel);
router.use('/Agencia/FechaEntrada/:Entrada', AgenciaFechaEntradaController.getbyEntrada);
router.use('/Agencia/FechaSalida/:Salida', AgenciaFechaSalidaController.getBySalida);



/*

router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/:id', MovieController.delete);
*/

module.exports = router;