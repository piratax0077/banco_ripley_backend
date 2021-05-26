'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tipo_cuenta = require('./tipo_cuenta');

var userSchema = Schema({
    nombre: String,
    rut: String,
    correo: String,
    telefono: Number,
    tipo_cuenta: {type: Schema.ObjectId, ref: tipo_cuenta } ,
    n_cuenta: Number,
    banco: String
});

module.exports = mongoose.model('User',userSchema);