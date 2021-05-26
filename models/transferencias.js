'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tipo_cuenta = require('./tipo_cuenta');
var user = require('./user');

var transferenciaSchema = Schema({
    destinatario_id: {type: Schema.ObjectId, ref: user },
    rut: String,
    bank_id: String,
    tipo_cuenta: {type: Schema.ObjectId, ref: tipo_cuenta },
    monto: Number
});

module.exports = mongoose.model('Transfer',transferenciaSchema);