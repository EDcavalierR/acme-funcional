const mongoose = require('mongoose');
const { Schema} = mongoose;

const CitaSchema = new Schema({
    Duracion: Number,
    TipoCita: String,
    LimiteCitas: Number,
    EstadoCita: Boolean,
    PrecioCita: Number,
    FechaCita: Date,
    HoraCita: Number,
})

module.exports = mongoose.model('Cita', CitaSchema);