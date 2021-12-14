const express = require('express');
const ruta_Unidadmedida = express.Router();
const cont_Unidadmedida = require("../controllers/controller_Unidadmedida");

ruta_Unidadmedida.get("/Registrar_Unidadmedida",cont_Unidadmedida.Registrar_Unidadmedida);
ruta_Unidadmedida.get("/Actualizar_Unidadmedida",cont_Unidadmedida.Actualizar_Unidadmedida);
ruta_Unidadmedida.get("/Borra_Unidadmedida",cont_Unidadmedida.Borra_Unidadmedida);
ruta_Unidadmedida.get("/Buscar_Unidadmedida",cont_Unidadmedida.Buscar_Unidadmedida);
ruta_Unidadmedida.get("/Listar_Unidadmedida",cont_Unidadmedida.Listar_Unidadmedida);

module.exports=ruta_Unidadmedida;

