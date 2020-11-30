const express = require('express');
const router = express.Router();
const proyectosControllers = require('../controllers/proyectosControllers')
module.exports = function()
{
   router.get('/', proyectosControllers.proyectosHome)
   router.get('/nueva-actividad', proyectosControllers.formularioProyectos)
   router.post('/nueva-actividad', proyectosControllers.nuevoProyecto)
   return router
}



