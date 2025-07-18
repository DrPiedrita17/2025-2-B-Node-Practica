import express from 'express';
import { actualizarTarea, crearTarea, eliminarTarea, obtenerTareaPorId, obtenerTareas } from '../controllers/taskController.js';

const router = express.Router();

//Obtener todas las tareas
router.get('/task', obtenerTareas );
// Obtener tarea por ID
router.get('/task/:id', obtenerTareaPorId ); 
//Crear una nueva tarea
router.post('/task', crearTarea);
//Actualizar una tarea existente
router.put('/task/:id', actualizarTarea);
//Eliminar una tarea
router.delete('/task/:id', eliminarTarea);


export default router;