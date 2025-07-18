/**
 * Rutas de Estados - Semana 7
 *
 * Define todas las rutas para el manejo de estados usando Express Router.
 * Implementa operaciones CRUD completas:
 * - GET /estados - Obtener todos los estados
 * - GET /estados/:id - Obtener estado por ID
 * - POST /estados - Crear nuevo estado
 * - PUT /estados/:id - Actualizar estado
 * - DELETE /estados/:id - Eliminar estado
 */

const express = require('express');
const router = express.Router();

// Importar controladores
const {
  obtenerEstados,
  obtenerEstado,
  crearEstado,
  actualizarEstado,
  eliminarEstado
} = require('../controllers/estadoController.js');

// ===== RUTAS DE ESTADOS =====

router.get('/', obtenerEstados);
router.get('/:id', obtenerEstado);
router.post('/', crearEstado);
router.put('/:id', actualizarEstado);
router.delete('/:id', eliminarEstado);

module.exports = router;