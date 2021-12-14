const controlador={};

controlador.Registrar_productos=(req,res)=>{
    res.render("Registrar_productos.ejs");
};
controlador.Actualizar_productos=(req,res)=>{
    res.render("Editar_productos.ejs");
};
controlador.Borra_productos=(req,res)=>{
    res.render("Borrar_productos.ejs");
};
controlador.Buscar_productos=(req,res)=>{
    res.render("Buscar_productos.ejs");
};
controlador.Listar_productos=(req,res)=>{
    res.render("Lista_productos.ejs");
};
controlador.Registrar_inventario=(req,res)=>{
    res.render("Registrar_inventario.ejs");
};
controlador.Actualizar_inventario=(req,res)=>{
    res.render("Editar_inventario.ejs");
};
controlador.Inventario_productos=(req,res)=>{
    res.render("Inventario_producto.ejs");
};
controlador.Borra_inventario=(req,res)=>{
    res.render("Borrar_inventario.ejs");
};
controlador.Buscar_inventario=(req,res)=>{
    res.render("Buscar_inventario.ejs");
};

module.exports=controlador;
