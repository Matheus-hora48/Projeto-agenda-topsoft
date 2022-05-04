const Contato = require('../models/CadastrarModel');

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};