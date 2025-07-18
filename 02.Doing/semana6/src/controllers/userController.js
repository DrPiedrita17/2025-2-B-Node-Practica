let usuarios = [];
let contadorId = 1;

export function obtenerUsuarios(req, res) {
    const { nombre, email } = req.query;
    let resultado = [...usuarios];

    if (typeof nombre === 'string' && nombre.trim()) {
        resultado = resultado.filter(u => u.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }

    if (typeof email === 'string' && email.trim()) {
        resultado = resultado.filter(u => u.email.toLowerCase().includes(email.toLowerCase()));
    }

    res.json(usuarios);
}   

export function obtenerUsuarioPorId(req, res) {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.json(usuario);
}

export function crearUsuario(req, res) {
    console.log(req.body);
    const { nombre, email } = req.body;

    if (!nombre || !nombre.trim()) {
        return res.status(400).json({ error: 'El nombre es obligatorio.' });
    }

    if (!email || !email.trim()) {
        return res.status(400).json({ error: 'El email es obligatorio.' });
    }

    const nuevoUsuario = {
        id: contadorId++,
        nombre: nombre.trim(),
        email: email.trim(),
    };

    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
}

export function actualizarUsuario(req, res) {
    const id = parseInt(req.params.id);
    const { nombre, email } = req.body;

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    if (nombre && !nombre.trim()) {
        return res.status(400).json({ error: 'El nombre no puede estar vacío.' });
    }

    if (email && !email.trim()) {
        return res.status(400).json({ error: 'El email no puede estar vacío.' });
    }

    usuario.nombre = nombre ? nombre.trim() : usuario.nombre;
    usuario.email = email ? email.trim() : usuario.email;

    res.json(usuario);
}

export function eliminarUsuario(req, res) {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    usuarios.splice(index, 1);
    res.status(204).send();
}

export function filtrarUsuarios(usersIds) {
    let usuariosFiltrados = [];
    usersIds.map(uId => {
        usuariosFiltrados.push(usuarios.filter(u => u.id === uId)[0]);
    });

    return usuariosFiltrados;
}
