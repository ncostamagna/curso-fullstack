'use strict'

var express = require('express');
var ProductosController = require('../controller/productos');
var api = express.Router();

api.get('/buscar', ProductosController.buscar);
api.post('/guardar', ProductosController.guardar);
api.delete('/eliminar/:id', ProductosController.eliminar);

module.exports = api;
