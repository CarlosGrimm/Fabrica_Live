const express = require('express');
const app = express();

const port = 3000

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
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
});

//- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
});

//- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID                  
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
});

app.listen(port);