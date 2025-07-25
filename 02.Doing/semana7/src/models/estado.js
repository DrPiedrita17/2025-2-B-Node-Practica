const mongoose = require('mongoose');

const EstadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        length: 250,
        required: true,
        unique: true,
    }
});

const Estado = mongoose.model('Estado', EstadoSchema);
module.exports = Estado;