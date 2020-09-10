const express = require('express')

// crear una aplicacion de express

const app = express()

// rutas del home 

app.use('/', (req, res) => {
    res.send('hola')
})


app.listen(7000)
