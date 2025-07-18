/**
 * Índice de Rutas - Semana 7
 *
 * Este archivo centraliza todas las rutas de la aplicación y las organiza
 * bajo un router principal. Facilita el mantenimiento y la escalabilidad
 * de la aplicación al tener un punto único de configuración de rutas.
 *
 * Rutas disponibles:
 * - /api/estados - Gestión de estados
 * - /api/municipios - Gestión de municipios
 * - /api/usuarios - Gestión de usuarios
 */
const express = require('express');
const router = express.Router();
// Importar todas las rutas
const estadoRoutes = require('./estadoRoutes');
const municipioRoutes = require('./municipioRoutes');
const usuariosRoutes = require('./usuariosRoutes');
// ===== CONFIGURACIÓN DE RUTAS =====
router.use('/estados', estadoRoutes);
router.use('/municipios', municipioRoutes);
router.use('/usuarios', usuariosRoutes);

module.exports = router;