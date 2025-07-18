import contarRoutes from './contarRoutes.js';

import express from 'express';
const router = express.Router();

// Definir las rutas
router.use(contarRoutes);
// Exportar el router
export default router;