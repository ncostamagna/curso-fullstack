'use strict'

var Producto = require('../model/producto');

function buscar(req, res){

  Producto.find({}, (err, productos) => {
    if(err)
      res.status(500).send({message: "Error al buscar"});
    else
      res.status(200).send({productos});
  });

}

function guardar(req, res){
  console.log(req.body);

  let producto = new Producto();

  producto.nombre = req.body.nombre;
  producto.tipoEntrega = req.body.tipoEntrega;
  producto.precio = req.body.precio;

  producto.save((err, productoGuardado) => {
    if(err)
      res.status(500).send({message: "Error al guardar producto"});
    else
      res.status(200).send({productoGuardado});
  });
}

function eliminar(req, res){
  let {id} = req.params;

  Producto.findByIdAndRemove(id,(doc) => {
    console.log(doc);
    res.status(200).send({mensaje: "El producto fue eliminado"})
  });
}

module.exports = {
  buscar,
  guardar,
  eliminar
}
