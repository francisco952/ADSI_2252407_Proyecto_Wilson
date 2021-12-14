const controlador={};


controlador.Registrar_produccion=(req,res)=>{
    res.render("Registrar_produccion.ejs");
};
controlador.Actualizar_produccion=(req,res)=>{
    res.render("Editar_produccion.ejs");
};
controlador.Borra_produccion=(req,res)=>{
    res.render("Borrar_produccion.ejs");
};
controlador.Buscar_produccion=(req,res)=>{
    res.render("Buscar_produccion.ejs");
};
controlador.Listar_produccion=(req,res)=>{
    res.render("Lista_produccion.ejs");
};

module.exports=controlador;