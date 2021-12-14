const express = require('express');
const ruta_home = express.Router();
const cont_home = require("../controllers/controller_home");

ruta_home.get("/Main_productos",cont_home.Main_productos);
ruta_home.get("/Main_produccion",cont_home.Main_produccion);
ruta_home.get("/Unidadesproductivas",cont_home.Unidadesproductivas);
ruta_home.get("/Personas",cont_home.Personas);
ruta_home.get("/Unidadmedida",cont_home.Unidadmedida);
ruta_home.get("/Tipoempaque",cont_home.Tipoempaque);
ruta_home.get("/Detallecompra",cont_home.Detallecompra);
ruta_home.get("/Compra",cont_home.Compra);
ruta_home.get("/Puntoventa",cont_home.Puntoventa);
module.exports=ruta_home;