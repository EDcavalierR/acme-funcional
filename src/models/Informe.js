const mongoose = require('mongoose');
const { Schema} = mongoose;

const InformeSchema = new Schema({
    IdInforme: Number,
    FechaInforme: Date,
    TipoInforme: String,
    CuerpoInforme: String,
})

module.exports = mongoose.model('Informe', InformeSchema);