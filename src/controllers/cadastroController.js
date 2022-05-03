const Cadastro = require('../models/CadastrarModel')

exports.index = (req, res) => {
  res.render('contato')
  return;
};

exports.register = async (req, res) => {
  try{
    const cadastro = new Cadastro(req.body)
    req.session.save(() => res.redirect('back'))
    res.send('oi')
    return
  }
  
};
