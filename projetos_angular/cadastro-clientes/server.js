// console.log("Hello, NodeJS");
// const http = require ('http');
// const server = http.createServer((req, res) => {
// res.end("Hello from the Back End");
// });
// server.listen(process.env.PORT || 3000)





// Podemos importar o objeto app no arquivo server.js. Uma vez importado, ele deve
// ser entregue à função createServer, substituindo o valor anterior. Além disso, há um ajuste a ser
// feito na configuração da porta

const http = require ('http');
const app = require ('./backend/app');
const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

//Vamos instalar o pacote nodemon que, entre outras coisas, oferece a funcionalidade de live reload.

