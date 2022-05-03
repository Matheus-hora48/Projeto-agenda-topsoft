//trabalha com os dados

const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  tipo: { type: String, required: true }, 
  
});

const CadastroModel = mongoose.model('Cadastro', CadastroSchema);

class Cadastro (body) {
  this.body = body
  this.contato = null
}

Cadastro.prototype.register = async function(){
  this.cadastro = await Cadastro.create(this.body)
}

Cadastro.prototype.cleanUp = function(){
  for(const key in this.body){
    if(typeof this.body[key] !== 'string'){
      this.body[key] = ''
    }
  }

  this.body = {
    nome: this.body.nome
    telefone: this.body.nome
    tipo: this.body.nome
  }
}

Cadastro.prototype.register = function(){
  this.valida()
}

module.exports = Cadastro;
