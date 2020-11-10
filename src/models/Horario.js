const mongoose = require('mongoose');
const { Schema} = mongoose;

const HorarioSchema = new Schema({
    IdHorario: Number,
    DiasAtencion: Number,
    HorasAtencion: Number,
    AsistenciaMedico: Boolean,
})

module.exports = mongoose.model('Horario', HorarioSchema);