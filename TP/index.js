
let express = require('express');
let cors = require('cors');
let mysql = require('mysql');

let app = express();
app.use(cors());
app.use(express.json())
app.listen(8080);

let conexion;

app.get('/inicio', function (solicitud, respuesta){
    conexion = mysql.createConnection({
        host:'localhost',
        user:'alumno',
        password:'alumnoipm'
    });
    conexion.connect();
    conexion.query("use tp");
    respuesta.send("¡HOLA!");
})

//nadianoe

app.get('/sonidos', function (solicitud, respuesta){
    conexion.query('SELECT * from sonidos;', function(error, filas, fields){

        /*

        */
        if (error) {
            console.log(error);
        }
        respuesta.send(filas);
    });
})

//app.use(bodyParser.json());



