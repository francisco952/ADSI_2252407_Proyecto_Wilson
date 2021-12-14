const controlador={};

controlador.Registrar_Unidadesproductivas=(req,res)=>{
    res.render("Registrar_Unidadesproductivas.ejs");
};
controlador.Actualizar_Unidadesproductivas=(req,res)=>{
    res.render("Editar_unidadesproductivas.ejs");
};
controlador.Borra_Unidadesproductivas=(req,res)=>{
    res.render("Borra_unidadesproductivas.ejs");
};
controlador.Buscar_Unidadesproductivas=(req,res)=>{
    res.render("Buscar_unidadesproductivas.ejs");
};
controlador.Listar_Unidadesproductivas=(req,res)=>{
    res.render("Lista_unidadesproductivas.ejs");
};

module.exports=controlador;