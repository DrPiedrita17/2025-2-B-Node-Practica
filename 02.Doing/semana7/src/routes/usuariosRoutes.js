/**
 * Rutas de Usuarios - Semana 7
 *
 * Define todas las rutas para el manejo de usuarios usando Express Router.
 * Implementa operaciones CRUD completas:
 * - GET /usuarios - Obtener todos los usuarios
 * - GET /usuarios/:id - Obtener usuario por ID
 * - GET /usuarios/municipio/:municipioId - Obtener usuarios por municipio
 * - POST /usuarios - Crear nuevo usuario
 * - PUT /usuarios/:id - Actualizar usuario
 * - DELETE /usuarios/:id - Eliminar usuario
 */

const express = require('express');
const router = express.Router();

// Importar controladores
const {
  obtenerUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/usuarioController.js');

// ===== RUTAS DE USUARIOS =====

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;