'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipo_cuentaSchema = Schema({
    descripcion: String
});

module.exports = mongoose.model('tipo_cuenta',tipo_cuentaSchema);