const { path } = require('../../server');
const { populate } = require('../models/estado');
const Usuario = require('../models/usuario');

async function obtenerUsuarios(req, res) {
  const users = await Usuario.find()
  .populate({
    path: 'idMunicipio',
    select: 'nombre estadoId',
    populate: {
        path: 'estadoId',
        select: 'nombre'
    }
  }).sort({ nombreCompleto: 1 });

  res.json(users);
}

async function obtenerUsuario(req, res) {
  const user = await Usuario.findById(req.params.id)
  .populate({
    path: 'idMunicipio',
    select: 'nombre estadoId',
    populate: {
        path: 'estadoId',
        select: 'nombre'
    }
  }).sort({ nombreCompleto: 1 });
  if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
}

async function obtenerUsuariosPorMunicipio(req, res) {
    const { idMunicipio } = req.params;
    
}

async function crearUsuario(req, res) {
  try {
    const { nombreCompleto, email, idMunicipio } = req.body;

    if (!nombreCompleto || !email || !idMunicipio) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const newUser = await Usuario.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarUsuario(req, res) {
  try {
    const { nombreCompleto, email, idMunicipio } = req.body;

    if (!nombreCompleto || !email || !idMunicipio) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const updatedUser = await Usuario.findByIdAndUpdate(req.params.id, req.body);

    if (!updatedUser) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarUsuario(req, res) {
  try {
    const deletedUser = await Usuario.findByIdAndDelete(req.params.id);

    if (deletedUser) {
      return res.status(204);
    } else {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  actualizarUsuario,
  crearUsuario,
  eliminarUsuario,
  obtenerUsuario,
  obtenerUsuarios
}