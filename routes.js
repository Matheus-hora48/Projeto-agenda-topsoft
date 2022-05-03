const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const cadastroController = require('./src/controllers/cadastroController');

// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas do cadastro
route.get('/cadastro', cadastroController.index);




module.exports = route;
