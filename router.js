const VuelingRouter = require('./views/VuelingRouter');
const router = require('express').Router();

//Rutas


router.use('/Cliente',VuelingRouter);
router.use('/Cliente/DNI', VuelingRouter);
router.use('/Cliente/Telefono', VuelingRouter);
router.use('/Cliente/Email', VuelingRouter);
router.use('/Cliente/Nombre', VuelingRouter);

router.use('/Agencia', VuelingRouter);
router.use('/Agencia/IdReserva', VuelingRouter);
router.use('/Agencia/Hotel', VuelingRouter);
router.use('/Agencia/FechaEntrada', VuelingRouter);
router.use('/Agencia/FechaSalida', VuelingRouter);
router.use('/Agencia/Importe', VuelingRouter);



module.exports = router;


