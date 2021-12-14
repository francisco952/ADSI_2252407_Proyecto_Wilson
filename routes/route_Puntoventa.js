const express = require('express');
const ruta_Puntoventa = express.Router();
const cont_Puntoventa = require("../controllers/controller_Puntoventa");

ruta_Puntoventa.get("/Registrar_Puntoventa",cont_Puntoventa.Registrar_Puntoventa);
ruta_Puntoventa.get("/Actualizar_Puntoventa",cont_Puntoventa.Actualizar_Puntoventa);
ruta_Puntoventa.get("/Borra_Puntoventa",cont_Puntoventa.Borra_Puntoventa);
ruta_Puntoventa.get("/Buscar_Puntoventa",cont_Puntoventa.Buscar_Puntoventa);
ruta_Puntoventa.get("/Listar_Puntoventa",cont_Puntoventa.Listar_Puntoventa);

module.exports=ruta_Puntoventa;
