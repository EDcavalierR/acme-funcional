const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitaSchema = new Schema({
    DNIPaciente: String,
    IdMedico: String,
    Duracion: String,
    TipoCita: String,
    EstadoCita: Boolean,
    PrecioCita: Number,
    FechaCita: String,
    HoraCita: String,
})

module.exports = mongoose.model('Cita', CitaSchema);