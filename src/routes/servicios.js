const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

router.get('servicios/detalle-servicios/:id',  serviciosController.detalle);

module.exports = router;
