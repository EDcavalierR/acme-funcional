const mongoose = require('mongoose');
const { Schema} = mongoose;

const AgendaSchema = new Schema({
    IdAgenda: Number,
    HorasAsignadas: Number,

})

module.exports = mongoose.model('Agenda', AgendaSchema);