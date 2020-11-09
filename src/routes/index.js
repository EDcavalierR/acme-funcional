const express =  require('express');
const router = express.Router();

const Empleado = require('../models/Empleado.js');


router.post('/agregarempleado', async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
});


module.exports = router;