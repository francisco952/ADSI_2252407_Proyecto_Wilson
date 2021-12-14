/// Creacion de servidor
const { Console } = require('console');
const express=require('express');
const bodyparser=require("body-parser");
const bodyParser = require('body-parser');

const Servidor = express();

Servidor.use(express.static(__dirname+'/public')); ///Se configura la carpeta publica

///Recibir parametros
Servidor.use(bodyParser.json());
Servidor.use(bodyparser.urlencoded({extended:false}));
Servidor.set('view engine','ejs');
Servidor.set('views',__dirname+'/views');

///Cuerpo del Servidor
Servidor.use(require("./routes/route_index"));
Servidor.use(require("./routes/routes_home"));
Servidor.use(require("./routes/route_Unidadesproductivas"));
Servidor.use(require("./routes/route_productos"));
Servidor.use(require("./routes/route_produccion"));
Servidor.use(require("./routes/route_Personas"));
Servidor.use(require("./routes/route_Tipoempaque"));
Servidor.use(require("./routes/route_Unidadmedida"));
Servidor.use(require("./routes/route_Compra"));
Servidor.use(require("./routes/route_Detallecompra"));
Servidor.use(require("./routes/route_Puntoventa"));
//El puerto como se llamara
Servidor.listen(9000,()=>{
    console.log("El servidor se esta ejecutando en el Puerto 9000");
});