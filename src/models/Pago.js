const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagoSchema = new Schema({
    IdPago: Number,
    Cantidad: Number,
    TipoPago: String,
})

module.exports = mongoose.model('Pago', PagoSchema);