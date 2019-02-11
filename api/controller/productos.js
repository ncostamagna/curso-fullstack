'use strict'

function buscar(req, res){
  console.log("Ingreso en el controlador Buscar");
  res.status(200).send({mensaje: "Controlador Busqueda"})
}

function guardar(req, res){
  console.log(req.body);
  console.log("Ingreso en el controlador Guardar");
  res.status(200).send({mensaje: "Controlador Guardar"})
}

function eliminar(req, res){
  console.log(req.params.id);
  console.log("Ingreso en el controlador Eliminar");
  res.status(200).send({mensaje: "Controlador Eliminar"})
}

module.exports = {
  buscar,
  guardar,
  eliminar
}
