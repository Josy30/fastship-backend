
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

// POST: Crear un envío
router.post('/', crearEnvio);

// GET: Listar todos los envíos
router.get('/', listarEnvios);

// GET: Listar envíos activos
router.get('/activos', listarEnviosActivos);

// GET: Buscar un envío por ID
router.get('/:id', obtenerEnvioPorId);

// PUT: Actualizar un envío completo
router.put('/:id', actualizarEnvio);

// PATCH: Cambiar el estado del envío
router.patch('/:id/estado', cambiarEstadoEnvio);

// DELETE: Eliminar un envío
router.delete('/:id', eliminarEnvio);

module.exports = router;
