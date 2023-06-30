import 'dotenv/config.js'//configura las variables de entorno de la aplicacion
import "./config/db.js"
import express from'express'; //modulo necesario para levantar y configurar un servidor
import path from'path'; //modulo necesario para conocer la ubicaciob de nuestro servidor
import logger from'morgan';//modulo para registrar las peticiones que se reaslizan al servidor
import { __dirname } from './utils.js';
import cors from 'cors'//modulo para permitir origenes cruzados(puerto del back con puerto del front)
import indexRouter from'./routes/index.js';//enrutador principal de la aplicacion
let app = express(); //defino una variable con la ejecucion del modulo de express para crear un servidor
// VIEWS
app.set('views', path.join(__dirname, 'views'));//configuro que las vistas generadas en el backend estan en la capeta views
app.set('view engine', 'ejs');//configuro que las listas se van a definir con el lenguaje de EJS.(moto de plantilla)
//MIDDLEWARES
//es un metodo que obliga a mi aplicacion a usar algo(ejecutar una funcion)
app.use(logger('dev')); //obliga al servidor a usar el middleware de registro de peticiones
app.use(express.json());//obliga al servidor a transformar/manejar formato json(post/put)
app.use(express.urlencoded({ extended: false }));//obliga al servidor a acceder a consultas complejas(lee query params de una peticion)
app.use(express.static(path.join(__dirname, 'public')));//obliga al servidor a generar una carpeta de acceso PUBLICO
app.use(cors()) //obliga al servidor a cruzar los origrenes del front y back

app.use((req, res, next)=>{
    console.log('Time: ', new Date().getFullYear());
});
//ENDPOINTS
app.use('/api', indexRouter);//obliga al servidor a usar las rutas definifas en el enrutador
export default app;
