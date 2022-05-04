const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const cadastroController = require('./src/controllers/cadastroController');

// Rotas da home
route.get('/home', homeController.paginaInicial);

// Rotas do cadastro
route.get('/cadastro/index', cadastroController.index);
route.post('/cadastro/register', cadastroController.register);




module.exports = route;
