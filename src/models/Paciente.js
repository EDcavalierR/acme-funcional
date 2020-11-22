const mongoose = require('mongoose');
const { Schema } = mongoose;

const PacienteSchema = new Schema({
    TipodeIdentificacion: String,
    DNI: String,
    Nombres: String,
    Apellidos: String,
    Celular: Number,
    Telefono: Number,
    Correo: String,
    TipoUsuario: String,
    Usuario: String,
    Contraseña: String,
})

module.exports = mongoose.model('Paciente', PacienteSchema);