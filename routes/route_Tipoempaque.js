const express = require('express');
const ruta_Tipoempaque = express.Router();
const cont_Tipoempaque = require("../controllers/controller_Tipoempaque");

ruta_Tipoempaque.get("/Registrar_Tipoempaque",cont_Tipoempaque.Registrar_Tipoempaque);
ruta_Tipoempaque.get("/Actualizar_Tipoempaque",cont_Tipoempaque.Actualizar_Tipoempaque);
ruta_Tipoempaque.get("/Borra_Tipoempaque",cont_Tipoempaque.Borra_Tipoempaque);
ruta_Tipoempaque.get("/Buscar_Tipoempaque",cont_Tipoempaque.Buscar_Tipoempaque);
ruta_Tipoempaque.get("/Listar_Tipoempaque",cont_Tipoempaque.Listar_Tipoempaque);

module.exports=ruta_Tipoempaque;