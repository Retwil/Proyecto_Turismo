var ruta=require('express').Router();

module.exports=(function(modelo){
var usuario=require('../controladores/ControladorUsuario.js')(modelo);
ruta.get('/',function(peticion, respuesta){
	respuesta.send("Servidor iniciado");
});

ruta.post('/usuario/registro', usuario.registro);
ruta.post('/usuario/login', usuario.login);
return ruta;
});