const mongoose = require('mongoose');
const { Schema} = mongoose;

const EmpleadoSchema = new Schema({
    DNI: String,
    Nombres: String,
    Apellidos: String,
    Telefono: Number,
    Celular: Number,
    Correo: String,
    TipoUsuario: String,
    Usuario: String,
    Contraseña: String,
})

module.exports = mongoose.model('Empleado', EmpleadoSchema);