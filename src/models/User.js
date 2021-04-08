const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    telefone: String,
    email: String,
    password: String,
    endereco: {
        rua: String,
        cep: String,
        bairro: String,
        cidade: String,
        estado: String,
    }
})

module.exports = mongoose.model('User', UserSchema);