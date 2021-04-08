const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    staff: [
        {
            nome: String,
            cpf: String,
            cargo: String,
        }
    ],
    account: {
        agency: String,
        cc: String,
        code: String,
    }
})

module.exports = mongoose.model('Organization', OrganizationSchema);