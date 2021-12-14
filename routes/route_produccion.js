const express = require('express');
const ruta_produccion = express.Router();
const cont_produccion = require("../controllers/controller_produccion");

ruta_produccion.get("/Registrar_produccion",cont_produccion.Registrar_produccion);
ruta_produccion.get("/Borra_produccion",cont_produccion.Borra_produccion);
ruta_produccion.get("/Actualizar_produccion",cont_produccion.Actualizar_produccion);
ruta_produccion.get("/Buscar_produccion",cont_produccion.Buscar_produccion);
ruta_produccion.get("/Listar_produccion",cont_produccion.Listar_produccion);

module.exports=ruta_produccion;