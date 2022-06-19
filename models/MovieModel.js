let db1 = require('../db1');//cliente
//let db2 = require('../db2');//Agencia

MovieModel = {};
//AgenciaModel = {};

MovieModel.findAll = () => db1;
//AgenciaModel.findAll = () => db2;

MovieModel.findByDNI = (DNI) => db1.find(NUmdni => NUmdni.DNI == DNI);
MovieModel.findByTelefono = (Telefono) => db1.find(telef => telef.Telefono == Telefono);
MovieModel.findByNombre = (Nombre) => db1.find(usuario => usuario.Nombre == Nombre);
MovieModel.findByEmail = (Email) => db1.find(correo => correo.Email == Email);







/*
MovieModel.post = (newMovie) => {
    //let movies = db.filter(movie => movie.id != newMovie.id);
    db1.push(newMovie);
    return newMovie;
}

MovieModel.update = (newMovie) => {
    let movies = db.filter(movie => movie.id != newMovie.id);
    movies.push(newMovie);
    db1 = movies;
    return newMovie;
}

MovieModel.delete = (id) => {
    let movies = db.filter(movie => movie.id != id);
    db1 = movies;
    return `Registro ${id} eliminado correctamente`;
}

*/
module.exports = MovieModel;

