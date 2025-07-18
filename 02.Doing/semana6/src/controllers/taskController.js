import { filtrarUsuarios } from "./userController.js";
let tareas = [];
let contadorId = 1;

export function obtenerTareas(req, res) {
    const { completado, titulo } = req.query;
    let resultado = [...tareas];

    if (completado !== undefined) {
        const isBoolean = (completado === 'true') ? true : false;   
        resultado = resultado.filter(tarea => tarea.completado === isBoolean);
    }

    if (typeof titulo === 'string' && titulo.trim()) {
        resultado = resultado.filter(t => t.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }

    res.json(tareas);
}

export function obtenerTareasPorUsuario(req, res) {
    const userId = parseInt(req.params.userId);
    const tareasUsuario = tareas.filter(t => t.users.some(u => u.id === userId));

    if (tareasUsuario.length === 0) {
        return res.status(404).json({ error: 'No se encontraron tareas para el usuario especificado.' });
    }

    res.json(tareasUsuario);
}

export function obtenerTareaPorId(req, res) {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    res.json(tarea);
}

export function crearTarea(req, res) {
    const { titulo, descripcion, completado, userId } = req.body;

    if (!titulo || !titulo.trim()  === "") {
        return res.status(400).json({ error: 'El título es obligatorios.' });
    }

    const users = filtrarUsuarios(userId);
    if (!users || users.length < 1 || users === null) {
        return res.status(400).json({ error: 'El usuario no existe.' });
    }

    const nuevaTarea = {
        id: contadorId++,
        titulo: titulo.trim(),
        descripcion,
        completado,
        users
    };

    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
}

export function actualizarTarea(req, res) {
    const id = parseInt(req.params.id);
    const { titulo, descripcion, completado } = req.body;

    const tarea = tareas.find(t => t.id === id);
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    if (!titulo || !titulo.trim() === "") {
        return res.status(400).json({ error: 'El título es obligatorio.' });
    }

    if (typeof completado === 'boolean') {
        tarea.completado = completado;
    }
    tarea.titulo = titulo.trim();
    tarea.descripcion = descripcion;

    res.json( tarea );
}

export function eliminarTarea(req, res) {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    tareas = tareas.filter(t => t.id !== id);

    res.status(204).json({ message: 'Tarea eliminada correctamente.' });
}
