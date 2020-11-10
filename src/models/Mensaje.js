const mongoose = require('mongoose');
const { Schema} = mongoose;

const MensajeSchema = new Schema({
    IdMensaje: Number,
    CuerpoMensaje: String,
})

module.exports = mongoose.model('Mensaje', MensajeSchema);