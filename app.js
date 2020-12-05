let routes = require('./routes');
let express = require('express')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

// const http = require('http')
// const port = 3000

// const server = http.createServer(function(req,res){
  
// })

// server.listen(port,function(error){
//     if (error) {
//         console.log('Erro, servidor não conectado', error)
//     } else {
//         console.log('Servidor funcionando na porta ' + port)
//     }
// })