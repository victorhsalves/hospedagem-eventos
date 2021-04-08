const axios = require('axios');
const Organization = require('../models/Organization');

module.exports = {
    async Create(req, res){
        const {organizacao} = req.body;
        console.log(organizacao);
        return res.status(200).json(organizacao);
    }
}