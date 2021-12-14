const controlador={};

controlador.Registrar_Tipoempaque=(req,res)=>{
    res.render("Registrar_tipoempaque.ejs");
};
controlador.Actualizar_Tipoempaque=(req,res)=>{
    res.render("Editar_tipoempaque.ejs");
};
controlador.Borra_Tipoempaque=(req,res)=>{
    res.render("Borrar_empaque.ejs");
};
controlador.Buscar_Tipoempaque=(req,res)=>{
    res.render("Buscar_empaque.ejs");
};
controlador.Listar_Tipoempaque=(req,res)=>{
    res.render("Lista_tipoempaque.ejs");
};

module.exports=controlador;