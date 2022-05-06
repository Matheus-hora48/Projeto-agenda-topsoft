const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.index);

// Rotas de contato
route.get('/',  contatoController.index);
route.post('/register',contatoController.register);
route.get('/:id', contatoController.editIndex);
route.post('/edit/:id', contatoController.edit);
route.get('/delete/:id', contatoController.delete);

module.exports = route;
