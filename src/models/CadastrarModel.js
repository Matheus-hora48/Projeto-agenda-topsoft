//trabalha com os dados

const mongoose = require('mongoose');
const validator = require('validator')

const CadastroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  tipo: { type: String, required: true }, 
  
});

const CadastrarModel = mongoose.model('Cadastro', CadastroSchema);

function Cadastro(body)  {
  this.body = body
  this.errors = []
  this.contato = null
}

Cadastro.prototype.register = async function(){
  this.valida()

  if(this.errors.length > 0) return
  this.cadastro = await CadastrarModel.create(this.body)
}

Cadastro.prototype.valida = function(){
  this.cleanUp()

  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório')
  if(!this.body.telefone) this.errors.push('Telefone é um campo obrigatório')
}

Cadastro.prototype.cleanUp = function(){
  for(const key in this.body){
    if(typeof this.body[key] !== 'string'){
      this.body[key] = ''
    }
  }

  this.body = {
    nome: this.body.nome,
    telefone: this.body.telefone,
    tipo: this.body.tipo,
  }
}



module.exports = Cadastro;
