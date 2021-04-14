const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    members: [
        {
            cpf: String,
        }
    ]
})

module.exports = mongoose.model('Organization', OrganizationSchema);