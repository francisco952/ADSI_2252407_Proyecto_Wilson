const controlador={};
controlador.renderizar_index=(req,res)=>{
    res.render("index.ejs");
};
controlador.Main_productos=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Productos.ejs");
}
controlador.Main_produccion=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Produccion.ejs");
}
controlador.Unidadesproductivas=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Unidadesproductivas.ejs");
}
controlador.Personas=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Personas.ejs");
}
controlador.Unidadmedida=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Unidadmedida.ejs");
}
controlador.Tipoempaque=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Tipoempaque.ejs");
}
controlador.Detallecompra=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Detallecompra.ejs");
}
controlador.Compra=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Compra.ejs");
}
controlador.Puntoventa=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Puntoventa.ejs");
}
module.exports=controlador;