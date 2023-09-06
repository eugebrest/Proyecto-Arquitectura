const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

router.get('/servicios', serviciosController.servicios); //es necesario que diga otra vez '/servicios' o podria ser solo '/' o alguna otra palabra para referenciar servicios?

module.exports = router;