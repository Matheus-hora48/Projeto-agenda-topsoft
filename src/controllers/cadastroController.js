const Cadastro = require('../models/CadastrarModel')

exports.index = (req, res) => {
  res.render('contato')
  return;
};

exports.register = async (req, res) => {

  try{
    const cadastro = new Cadastro(req.body)
    await cadastro.register()

    if(contato.errors.length > 0) {
      req.flash('errors' , contato.errors)
      req.session.save(() => res.redirect('back'))
      return
    }

    req.flash('errors' , 'Contato registrado com sucesso')
    req.session.save(() => res.redirect('back'))
    return

  } catch(e) {
    console.log(e)
      return res.render('404')
  }
  
};
