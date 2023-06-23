
import app from '../app.js'; //importo la app de back configurada
import debug from 'debug' ;//importo el modulo debuguear
import http from 'http'; //importo el modulo para crear servidores
const logger= debug('minga-color-back') //se configura el debugueador

let port = normalizePort(process.env.PORT || '8080');//defino el puerto donde va a funcionar nuestro servidor
app.set('port', port);//configurio el puerto con la letiable port definidfa anteriormente
let server = http.createServer(app);//utilizo el modulo http para crear un servidor con las configuraciones que se realizaron en app
// listense utiliza para escuchar un puerto y es el encargado de levantar efectivamente el servidor(empieza a funcioonar)
function ready(){
  console.log('server ready on port'+port);
}

server.listen(
  port, //primer parametrp 
  ready //seugndo parametro callback opcional para mostrar en consola si el servidor se levanto correctamente
  );
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + 'from s elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
