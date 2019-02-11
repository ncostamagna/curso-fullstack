'use strict'

var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var procuctos_routers = require('./routers/productos');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/productos', procuctos_routers);

module.exports = app;
