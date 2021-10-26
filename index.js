const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

/*
  Lista de Endpoints da aplicação CRUD de mensagens
  CRUD: Create, Read (Single & All), Update and Delete
  CRUD: Criar, Ler (Individual e Tudo), Atualizar e Remover
    - [GET] /mensagens - Retorna a lista de mensagens
    - [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
    - [POST] /mensagens - Cria uma nova mensagem
    - [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
    - [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
*/

const mensagens = [
                    "Primeira Mensagem",
                    "Segunda Mensagem"
                  ];

//- [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

//- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = mensagens[id];
  res.send(mensagem);
});


//- [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.mensagem;
  mensagens.push[mensagem];
  res.send(`Mensagem criada com sucesso: '${mensagem}'.`);
});

//- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id;
  const mensagem = req.body.mensagem;
  mensagens[id] = mensagem;
  res.send(`Mensagem alterada com sucesso: '${mensagem}'.`);
});

//- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID                  
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
});

app.listen(port);