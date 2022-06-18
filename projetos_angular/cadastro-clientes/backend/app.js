// const express = require("express");
// const app = express();
// app.use((req, res, next) => {
//   console.log("Chegou uma requisição");
//   next();
// });
// app.use((req, res, next) => {
//   res.send("Hello from the Back end");
// });
// module.exports = app;

// No momento, a aplicação Angular utiliza uma coleção local de clientes
// armazenada em memória volátil. Evidentemente, esperamos que a lista seja armazenada no Back
// End, em memória persistente. Vamos implementar um primeiro endpoint que permite a busca
// por clientes.
// - No arquivo app.js, podemos eliminar a primeira função entregue para use

// - A função use pode receber outros argumentos, como o “path” que o usuário deve digitar no
// navegador para disparar determinada função.

// const express = require ('express');
// const app = express();
// app.use('/api/clientes', (req, res, next) => {
// res.send("Hello from the Back end");
// });
// module.exports = app;

// Nossos endpoints irão devolver dados no formato JSON. Um dos benefícios obtidos por conta
// do uso do Express é a facilidade de manipulação desse formato. A seguir, vamos criar uma
// coleção fictícia com dados de alguns clientes. Para entregá-lo ao cliente em formato JSON,
// usamos o método json do objeto res.




// - Caso deseje, você também pode devolver um objeto JSON com mais dados, talvez com uma
// mensagem indicando o resultado da operação
//   - Também podemos encadear chamadas de métodos para especificar configurações diversas. Por
// exemplo, o método status permite especificar o código de status definido pelo protocolo HTTP.

const express = require("express");
const app = express();
const clientes = [
  {
    id: "1",
    nome: "Jose",
    fone: "11223344",
    email: "jose@email.com",
  },
  {
    id: "2",
    nome: "Jaqueline",
    fone: "22112211",
    email: "jaqueline@email.com",
  },
];

// - CORS significa Cross-Origin Resource Sharing. Note que o nome é um tanto sugestivo. Em
// nosso ambiente temos, de fato, conteúdo que desejamos compartilhar entre aplicações que estão
// em servidores diferentes. Quando escrevemos um servidor podemos especificar se requisições
// vindas de outros servidores são permitidas ou não. Por padrão, elas são bloqueadas. No arquivo
// backend/app.js, vamos especificar uma função que executa antes de a requisição ser atendida.
// Ela se encarrega de ajustar os cabeçalhos da resposta.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,OPTIONS"
  );
  next();
});

// (Endpoint para a inserção de novos clientes) O método mais adequado para a criação de
// novos recursos (a inserção de um novo cliente, por exemplo) do protocolo HTTP é o post. O
// objeto app permite que especifiquemos o método desejado trocando o método use pelo seu
// nome. Veja a Listagem 2.4.1. Certifique-se de escrever esse trecho abaixo do código que
// configura os cabeçalhos para tratamento CORS



app.use('/api/clientes', (req, res, next) => {
  res.status(200).json({
  mensagem: "Tudo OK",
  clientes: clientes
  });
  });
  module.exports = app;

  // Agora podemos ajustar a
  // aplicação Angular para que seu serviço de manipulação de clientes interaja diretamente com o
  // Back End. O Angular possui um módulo que implementa o protocolo HTTP. O primeiro passo é
  // importá-lo no módulo principal (app.module.ts) da aplicação.

//   - Intuitivamente, cabe ao serviço de manipulação de clientes fazer as requisições HTTP que
// envolvem clientes. Por isso, vamos injetar um objeto do tipo HttpClient em seu construtor, no
// arquivo clientes.service.ts.

// No arquivo app.js, importe o pacote recém-instalado como mostra a Listagem 2.4.2. Além
// disso, chame a função use entregando a ela o resultado da chamada à função json do bodyParser.
// Ela devolve uma função apropriada para a manipulação de dados em formato JSON.


const bodyParser = require ('body-parser');
app.use (bodyParser.json());

// Uma vez aplicada essa função, podemos fazer uso de um campo chamado body que agora
// existe no objeto que representa a requisição.

// app.post ('/api/clientes', (req, res, next) => {
//   const cliente = req.body;
//   console.log(cliente);
//   res.status(201).json({mensagem: 'Cliente inserido'})
//   });

  // Criando uma instância do tipo Cliente) Quando uma requisição post for recebida,
  // desejamos criar uma instância de Cliente para, a seguir, fazer a sua inserção na base.
  // - No arquivo backend/app.js, comece importando o schema

  const Cliente = require ('./models/cliente');

  // app.post ('/api/clientes', (req, res, next) => {
  //   const cliente = new Cliente({
  //   nome: req.body.nome,
  //   fone: req.body.fone,
  //   email: req.body.email
  //   })
  //   console.log (cliente);
  //   res.status(201).json({mensagem: 'Cliente inserido'})
  //   });


    // - Para fazer a conexão, abra o arquivo backend/app.js e, após importar o mongoose, execute seu
    // método connect. Ele recebe a string de conexão copiada no Atlas. Note que é preciso chamar o
    // método connect depois de o objeto express ter sido criado.

const mongoose = require ('mongoose');
mongoose.connect('sua string de conexão aqui');
then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão NOK")
  });
// Note que o método connect devolve uma promise que nos permite verificar se a conexão foi
// realizada com sucesso ou não.


// Para fazer a inserção de um cliente na base, utilizamos o método save do objeto cliente
app.post ('/api/clientes', (req, res, next) => {
  const cliente = new Cliente({
  nome: req.body.nome,
  fone: req.body.fone,
  email: req.body.email
  })
  cliente.save();
  console.log (cliente);
  res.status(201).json({mensagem: 'Cliente inserido'})
  });

  // Até o momento, as requisições get enviadas ao servidor Node têm como
  // resposta um vetor JSON de clientes que está fixo no código. Vamos ajustar a sua implementação
  // para que os dados sejam trazidos diretamente da base gerenciada pelo MongoDB.
  // - Para a busca, usaremos o método estático find do modelo Cliente. Ele devolve uma promise
  // por meio da qual podemos acessar a coleção de documentos.
  app.get('/api/clientes', (req, res, next) => {
    Cliente.find().then(documents => {
    res.status(200).json({
    mensagem: "Tudo OK",
    clientes: documents
    });
    })
    });
