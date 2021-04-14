const axios = require('axios');
const Organization = require('../models/Organization');

module.exports = {
    async Create(req, res){
        const {name, description, members} = req.body.organization;
        // console.log(organizacao);
        
        let organization = await Organization.findOne({name});
        if(!organization){
            console.log(cu)
            organization = await Organization.create({
                name,
                description,
                members,
            }).then(()=> {
                return res.status(200).json(organization);
            }).catch((e) => {
                return res.status(500).json({ "error": "Erro: " + e});
            })
        }else{
            return res.status(208).json({"message": "Organização já cadastrada!"});
        }
    },
    async List (req, res){
        const orgs = await Organization.find();

        return res.json(orgs);
    }
}