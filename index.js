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
                    {
                      "id": 1,
                      "texto": "Primeira Mensagem",
                    },
                    {
                      "id": 2,
                      "texto": "Segunda Mensagem",
                    },
                  ]


const getMensagemById = id => mensagens.find(msg => msg.id === id);

//- [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

//- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
  const id = +req.params.id;
  const mensagem = getMensagemById(id);

  if(!mensagem) {
    res.send("Mensagem não Encontrada.");  
    return;
  }else{
    res.send(mensagem);
  }
  
});


//- [POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
  const mensagem = req.body;
  mensagem.id = mensagens.length+1;
  mensagens.push(mensagem);
  res.send(mensagem);
});

//- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
  const id = +req.params.id;
  const mensagem = getMensagemById(id);

  const novoTexto = req.body.texto;
  mensagem.texto = novoTexto;
  
  res.send(mensagem);
});

//- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID                  
app.delete('/mensagens/:id', (req, res) => {
  const id = +req.params.id;
  const mensagem = getMensagemById(id);

  const index = mensagens.indexOf(mensagem);

  mensagens.splice(index,1);

  res.send("Mensagem removida com sucesso.");
});

app.listen(port);