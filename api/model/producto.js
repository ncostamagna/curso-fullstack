'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
  nombre: String,
  tipoEntrega: String,
  precio: Number
});

module.exports = mongoose.model('productos', ProductoSchema);
