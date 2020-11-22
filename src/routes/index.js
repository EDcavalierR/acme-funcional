const express =  require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const qrcode = require('qrcode');

const Empleado = require('../models/Empleado.js');
const Paciente = require('../models/Paciente.js');
const Cita = require('../models/Cita.js');


router.post('/agregarempleado', async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
});

router.get('/obtenerempleado', async (req, res) => {
    const empleado = await Empleado.find({TipoUsuario: "Medico"});
    res.json(empleado);
});
router.get('/obtenerempleadot', async (req, res) => {
    const empleado = await Empleado.find();
    res.json(empleado);
});

router.post('/agregarpaciente', async (req, res) => {
    const paciente = new Paciente(req.body);
    paciente.Usuario = GenerarUsuario(paciente.Nombres, 3);
    paciente.Contraseña = GenerarContraseña(5);
    await paciente.save();
    EnviarCorreo(paciente);
});

router.post('/agregarcita', async (req, res) => {
    const cita = new Cita(req.body);
    await cita.save();
});

router.get('/obtenerpaciente', async (req, res) => {
    const paciente = await Paciente.find();
    res.json(paciente);
});

router.get('/obtenercita', async (req, res) => {
    const cita = await Cita.find();
    res.json(cita);
});
router.delete('/borrarcita/:id', async (req, res) => {
    await Cita.findByIdAndRemove(req.params.id);
    res.json({
        status: 'borrado con exito'
    })
});

function GenerarContraseña(tam){
    let ContraseñaRandom = '';
    let Caracteres = 'abcdefghijklmnñopqrstuvwxyz1234567890!"#$%&/-+*_';

    for (let i = 0; i < tam; i++) {
        ContraseñaRandom += Caracteres.charAt(Math.floor(Math.random() * Caracteres.length));
    }
    return ContraseñaRandom
}

function GenerarUsuario(UsuarioRandom, tam){
    let Caracteres = 'abcdefghijklmnñopqrstuvwxyz';

    for (let i = 0; i < tam; i++) {
        UsuarioRandom += Caracteres.charAt(Math.floor(Math.random() * Caracteres.length));
    }
    return UsuarioRandom
}

async function EnviarCorreo(paciente){
    MensajeCorreo = `
        <h1>¡Felicidades ${paciente.Nombres} ${paciente.Apellidos}, ya se encuentra registrado en nuestra plataforma!</h1>
        <br>
        <span>Tus datos ingresados fueron:</span>
        <p>Numero de Documento: ${paciente.DNI}</p>
        <p>Telefono: ${paciente.Telefono}</p>
        <p>Celular: ${paciente.Celular}</p>
        <br>
        <span>Se ha generado un nuevo usuario y contraseña para tu cuenta:</span>
        <p>Usuario: ${paciente.Usuario}</p>
        <p>Contraseña: ${paciente.Contraseña}</p>
    `;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'acme.cdk@gmail.com',
            pass: 'CDKSOFT7'
        }
    });

    const info = await transporter.sendMail({
        from: "ACME",
        to: 'acme.cdk@gmail.com',
        subject: 'Nuevo Usuario y Contraseña',
        html: MensajeCorreo
    });
    console.log('Mensaje enviado', info.messageId);

}

module.exports = router;