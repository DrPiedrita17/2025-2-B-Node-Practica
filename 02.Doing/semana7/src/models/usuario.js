const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
        length: 140
    },
    email:{
        type: String,
        required: true, 
        length: 100,
        unique: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    idMunicipio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Municipio',
    }

});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;