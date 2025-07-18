import taskRoutes from './taskRoutes.js';
import userRoutes from './userRoutes.js';

import express from 'express';
const router = express.Router();

// Definir las rutas
router.use(taskRoutes);
router.use(userRoutes);
// Exportar el router
export default router;