const express = require('express')
const router = require('./routers')
const path = require('path')
// crear una aplicacion de express

const app = express()


//habilitar pug 
app.set('view engine', 'pug') // habilitar pug


// añadir carpeta de view

app.set('views', path.join(__dirname, './views'))

// rutas del home 
app.use('/', router()) // para hacer request o response 

app.listen(3000)
