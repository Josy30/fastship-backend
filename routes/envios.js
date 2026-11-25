
const express = require('express');
const router = express.Router();

const {
    crearEnvio,
    listarEnvios,
    obtenerEnvioPorId,
    actualizarEnvio,
    cambiarEstadoEnvio,
    eliminarEnvio,
    listarEnviosActivos
} = require('../controllers/envioController');

router.post('/', crearEnvio);

router.get('/', listarEnvios);

router.get('/activos', listarEnviosActivos);

router.get('/:id', obtenerEnvioPorId);

router.put('/:id', actualizarEnvio);


router.patch('/:id/estado', cambiarEstadoEnvio);

router.delete('/:id', eliminarEnvio);

module.exports = router;
