const express = require('express')
const router = require('./routers')
// crear una aplicacion de express

const app = express()

// rutas del home 
app.use('/', router())

app.listen(7000)
