const express = require('express');
const ruta_productos = express.Router();
const cont_productos = require("../controllers/controller_productos");

ruta_productos.get("/Registrar_productos",cont_productos.Registrar_productos);
ruta_productos.get("/Borra_productos",cont_productos.Borra_productos);
ruta_productos.get("/Actualizar_productos",cont_productos.Actualizar_productos);
ruta_productos.get("/Buscar_productos",cont_productos.Buscar_productos);
ruta_productos.get("/Listar_productos",cont_productos.Listar_productos);
ruta_productos.get("/Registrar_inventario",cont_productos.Registrar_inventario);
ruta_productos.get("/Inventario_productos",cont_productos.Inventario_productos);
ruta_productos.get("/Actualizar_inventario",cont_productos.Actualizar_inventario);
ruta_productos.get("/Borra_inventario",cont_productos.Borra_inventario);
ruta_productos.get("/Buscar_inventario",cont_productos.Buscar_inventario);

module.exports=ruta_productos;