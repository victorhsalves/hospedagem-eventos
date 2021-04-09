const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    phone: String,
    email: String,
    password: String,
    address: [
        {
            street: String,
            zip_code: String,
            district: String,
            city: String,
            state: String,
            country: String,
        }
    ],
    organizacao: [
        {
            id_org: String,
            role: String,
        }
    ]
})

module.exports = mongoose.model('User', UserSchema);