'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankSchema = Schema({
    id: String,
    name: String
});

module.exports = mongoose.model('Bank',bankSchema);