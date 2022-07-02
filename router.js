const MovieRouter = require('./views/VuelingRouter');
const router = require('express').Router();

//Rutas


router.use('/', MovieRouter);




module.exports = router;


