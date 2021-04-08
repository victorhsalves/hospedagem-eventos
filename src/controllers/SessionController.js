const axios = require('axios');
const crypto = require('crypto');
const Utils = require('../utils/utils');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


module.exports = {
    async Register(req, res){
        const { usuario } = req.body;
        const name = usuario.name;
        const cpf = usuario.cpf;
        const telefone = usuario.telefone;
        const email = usuario.email;
        const password = Utils.md5(usuario.password);
        console.log(password + ' ' + usuario.password);
        const endereco = usuario.endereco;

        let user = await User.findOne({cpf});
        if(!user){
            user = await User.create({
                name,
                cpf,
                telefone,
                email,
                password,
                endereco
            }).then(()=> {
                return res.status(200).json(user);
            }).catch((e) => {
                return res.status(500).json({ "error": "Erro: " + e});
            })
        }else{
            return res.status(208).json({"message": "Usuário já cadastrado!"});
        }
    },
    async Login(req, res){
        const { cpf, password } = req.body;
        let user = await User.findOne({cpf});
        if(user){
            let Hpwd = crypto.createHash('md5').update(password).digest("hex").toString();
            console.log(Hpwd);
            if (user.password == Hpwd){
                console.log('cu');
                const token = jwt.sign({
                        email: user.email,
                        name: user.name,
                        pwd: Hpwd
                    },
                        process.env.TOKEN_SECRET,
                    {
                        expiresIn: process.env.TOKEN_TIME_LIFE
                    }
                );
                return res.status(200).json({ message: 'Success', token: token });
            }else{
                return res.status(200).json({ message: 'Senha incorreta'});
            }
        }
    }
}