const controlador={};
controlador.renderizar_index=(req,res)=>{
    res.render("index.ejs");
};
controlador.Validar_usuario=(req,res)=>{
    //Aqui se valida los datos en la base
    var login = req.body.login;
    var password = req.body.password;
    if(login=="Wilson" && password=="12345"){
        res.render("home.ejs",{"usuario":login});
    }
    else{
        res.render("Error404.ejs");
    };
}
controlador.Home=(req,res)=>{
    //Aqui se valida los datos en la base
    res.render("Home.ejs");
}
module.exports=controlador;