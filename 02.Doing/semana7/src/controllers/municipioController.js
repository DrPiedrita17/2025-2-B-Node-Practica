const Municipio = require('../models/municipio');

async function obtenerMunicipios(req, res) {
  const municipios = await Municipio.find().sort({ nombre: 1 });
  res.json(municipios);
}

async function obtenerMunicipio(req, res) {
  const municipio = await Municipio.findById(req.params.id);
  if (!municipio) {
    return res.status(400).json({ error: 'Municipio no encontrado' });
  }
  res.json(municipio);
}

async function obtenerMunicipiosPorEstado(req, res) {
    const idEstado = req.params.estadoId;

    const municipios = await Municipio.find({estadoId: idEstado});

    res.json(municipios);
}

async function crearMunicipio(req, res) {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const newMunicipio = await Municipio.create(req.body);
    res.json(newMunicipio);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarMunicipio(req, res) {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const updatedMunicipio = await Municipio.findByIdAndUpdate(req.params.id, req.body);

    if (!updatedMunicipio) {
      return res.status(400).json({ error: 'Municipio no encontrado' });
    }
    res.json(updatedMunicipio);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarMunicipio(req, res) {
  try {
    const deletedMunicipio = await Municipio.findByIdAndDelete(req.params.id);

    if (deletedMunicipio) {
      return res.status(204);
    } else {
      return res.status(400).json({ error: 'Municipio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  actualizarMunicipio,
  crearMunicipio,
  eliminarMunicipio,
  obtenerMunicipio,
  obtenerMunicipios,
  obtenerMunicipiosPorEstado
}