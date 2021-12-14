const express = require('express');
const ruta_Personas = express.Router();
const cont_Personas = require("../controllers/controller_Personas");

ruta_Personas.get("/Registrar_Personas",cont_Personas.Registrar_Personas);
ruta_Personas.get("/Actualizar_Personas",cont_Personas.Actualizar_Personas);
ruta_Personas.get("/Borra_Personas",cont_Personas.Borra_Personas);
ruta_Personas.get("/Buscar_Personas",cont_Personas.Buscar_Personas);
ruta_Personas.get("/Listar_Personas",cont_Personas.Listar_Personas);

module.exports=ruta_Personas;
