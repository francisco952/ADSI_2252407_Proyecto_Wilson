const express = require('express');
const ruta_Compra = express.Router();
const cont_Compra = require("../controllers/controller_Compra");

ruta_Compra.get("/Registrar_Compra",cont_Compra.Registrar_Compra);


module.exports=ruta_Compra;