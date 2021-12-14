const express = require('express');
const ruta_index= express.Router();
const cont_index = require("../controllers/controller_index");


ruta_index.get("/",cont_index.renderizar_index);
ruta_index.post("/Validar_usuario",cont_index.Validar_usuario);
ruta_index.get("/Home",cont_index.Home);


module.exports= ruta_index;