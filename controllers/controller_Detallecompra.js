const controlador={};

controlador.Actualizar_Detallecompra=(req,res)=>{
    res.render("Editar_compra.ejs");
};
controlador.Borra_Detallecompra=(req,res)=>{
    res.render("Borrar_compra.ejs");
};
controlador.Buscar_Detallecompra=(req,res)=>{
    res.render("Buscar_detallecompra.ejs");
};
controlador.Listar_Detallecompra=(req,res)=>{
    res.render("Lista_compra.ejs");
};

module.exports=controlador;