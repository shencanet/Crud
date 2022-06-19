let db2 = require('../db2');//Agencia

AgenciaModel = {};

AgenciaModel.findAll = () => db2;

AgenciaModel.finByIdReserva = (IdReserva) => db2.find(Reserva => Reserva.IdReserva == IdReserva);
AgenciaModel.findByHotel = (Hotel) => db2.find(Ubicacion => Ubicacion.Hotel == Hotel);
AgenciaModel.findByEntrada = (Entrada) => db2.find(checkin => checkin.FechaEntrada == Entrada);
AgenciaModel.findBySalida = (Salida) => db2.find(checkout => checkout.FechaSalida == Salida);



module.exports = AgenciaModel;