const express = require('express');
const router = require('./routers');
const path = require('path');
const bodyParse = require('body-parser'); // habilitar para leer datos del formulario 
// crear una aplicacion de express

const app = express();

// cargar los archivos estaticos

app.use(express.static('public'));
// set -> agrega archivo
// use  --> 
// lister

//habilitar pug 
app.set('view engine', 'pug') // habilitar pug
// view engine --> palabra reservada de express


// añadir carpeta de view

app.set('views', path.join(__dirname, './views'))


//habilitar body parse

app.use(bodyParse.urlencoded({extended : true}))
// rutas del home 
app.use('/', router()) 
// para hacer request o response 

app.listen(3000)
