const express = require('express');
const ruta_Detallecompra = express.Router();
const cont_Detallecompra = require("../controllers/controller_Detallecompra");

ruta_Detallecompra.get("/Actualizar_Detallecompra",cont_Detallecompra.Actualizar_Detallecompra);
ruta_Detallecompra.get("/Borra_Detallecompra",cont_Detallecompra.Borra_Detallecompra);
ruta_Detallecompra.get("/Buscar_Detallecompra",cont_Detallecompra.Buscar_Detallecompra);
ruta_Detallecompra.get("/Listar_Detallecompra",cont_Detallecompra.Listar_Detallecompra);

module.exports=ruta_Detallecompra;
