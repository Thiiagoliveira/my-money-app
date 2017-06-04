//Referencia ao server;
//Referencia ao Banco de dados;
//Referencia a rotas;
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)