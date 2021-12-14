const controlador={};

controlador.Registrar_Puntoventa=(req,res)=>{
    res.render("Registrar_puntoventa.ejs");
};
controlador.Actualizar_Puntoventa=(req,res)=>{
    res.render("Editar_puntoventa.ejs");
};
controlador.Borra_Puntoventa=(req,res)=>{
    res.render("Borrar_puntoventa.ejs");
};
controlador.Buscar_Puntoventa=(req,res)=>{
    res.render("Buscar_puntoventa.ejs");
};
controlador.Listar_Puntoventa=(req,res)=>{
    res.render("Lista_puntoventa.ejs");
};

module.exports=controlador;