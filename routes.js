const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.index);

// Rotas de contato
route.get('/contato/index',  contatoController.index);
route.post('/contato/register',contatoController.register);
route.get('/contato/index/:id', contatoController.editIndex);
route.post('/contato/edit/:id', contatoController.edit);
route.get('/contato/delete/:id', contatoController.delete);

module.exports = route;
