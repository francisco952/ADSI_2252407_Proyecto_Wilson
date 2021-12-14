const express = require('express');
const ruta_Unidadesproductivas = express.Router();
const cont_Unidadesproductivas = require("../controllers/controller_Unidadesproductivas");

ruta_Unidadesproductivas.get("/Registrar_Unidadesproductivas",cont_Unidadesproductivas.Registrar_Unidadesproductivas);
ruta_Unidadesproductivas.get("/Actualizar_Unidadesproductivas",cont_Unidadesproductivas.Actualizar_Unidadesproductivas);
ruta_Unidadesproductivas.get("/Borra_Unidadesproductivas",cont_Unidadesproductivas.Borra_Unidadesproductivas);
ruta_Unidadesproductivas.get("/Buscar_Unidadesproductivas",cont_Unidadesproductivas.Buscar_Unidadesproductivas);
ruta_Unidadesproductivas.get("/Listar_Unidadesproductivas",cont_Unidadesproductivas.Listar_Unidadesproductivas);

module.exports=ruta_Unidadesproductivas;

