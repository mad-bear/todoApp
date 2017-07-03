const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Users} = require('./models/user');
const {Todo} = require('./models/todo');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
  Todo.create({
    text: req.body.text
  }).then((doc) => {
    console.log('success');
    res.status(200).send('Well Added');
  }, (e) => {
    console.log('shit , failed');
    res.status(400).send('An Error Occured');
  });
});

app.get('/todo/:id', (req, res) =>{
  if(!ObjectID.isValid(req.params.id)){
    return res.status('404').send('invalid ID');
  };
  Todo.findById(req.params.id).then((doc) => {
    if(!doc){
      res.status('404').send('no object with this id');
    }
    else{
      res.status('200').send(doc);
    }
  }, (e) => {
    res.status('404').send('can\'t extract the item');
  });
});

app.listen(3000, () => {
  console.log('Server on board');
});
