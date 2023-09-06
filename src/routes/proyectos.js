const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');

router.get('/menu-personalizados', proyectosController.menu);
router.get('/detalle-personalizado/:id', proyectosController.detalle);
//en donde estaria la ruta para los proyectos realizados? Accedo al detalle clickeando cada imagen en particular.

module.exports = router;