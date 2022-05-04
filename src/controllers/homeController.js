const Cadastro = require('../models/CadastrarModel')

exports.paginaInicial = async (req, res) => {
  const contatos = await Contato.buscaContato()
  res.render('index', {contatos});
};