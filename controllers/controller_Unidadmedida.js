const controlador={};

controlador.Registrar_Unidadmedida=(req,res)=>{
    res.render("Registrar_Unidadmedida.ejs");
};
controlador.Actualizar_Unidadmedida=(req,res)=>{
    res.render("Editar_unidadmedida.ejs");
};
controlador.Borra_Unidadmedida=(req,res)=>{
    res.render("Borrar_unidadmedida.ejs");
};
controlador.Buscar_Unidadmedida=(req,res)=>{
    res.render("Buscar_medida.ejs");
};
controlador.Listar_Unidadmedida=(req,res)=>{
    res.render("Lista_unidadmedida.ejs");
};

module.exports=controlador;