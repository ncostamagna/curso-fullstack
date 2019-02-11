var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso_full_stack', (err, res)=>{
  if(err){
    throw err;
  }else{
    app.listen(port, () =>{
      console.log("Nuestro servidor esta escuchando en el puerto: " + port + " con la BD arriba");
    });
  }
})
