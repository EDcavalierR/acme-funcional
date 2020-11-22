const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost/acme')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));


//Settings
app.use(express.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3000);

//Middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/index.js'));

//Statics Files


//Server is listening
app.listen(app.get('port'), () => {
    console.log('hola duban, se esta escuchando en el puerto: ', app.get('port'));
})