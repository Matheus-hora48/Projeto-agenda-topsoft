//trabalha com os dados

const mongoose = require('mongoose');

const CadastroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const CadastroModel = mongoose.model('Cadastro', CadastroSchema);

class Cadastro {

}

module.exports = Cadastro;
