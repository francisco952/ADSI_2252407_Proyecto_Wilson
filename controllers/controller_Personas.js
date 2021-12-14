const controlador={};


controlador.Registrar_Personas=(req,res)=>{
    res.render("Registrar_personas.ejs");
};
controlador.Actualizar_Personas=(req,res)=>{
    res.render("Editar_personas.ejs");
};
controlador.Borra_Personas=(req,res)=>{
    res.render("Borrar_personas.ejs");
};
controlador.Buscar_Personas=(req,res)=>{
    res.render("Buscar_personas.ejs");
};
controlador.Listar_Personas=(req,res)=>{
    res.render("Listar_personas.ejs");
};

module.exports=controlador;