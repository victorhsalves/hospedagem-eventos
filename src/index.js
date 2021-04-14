require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

//estudar documentação da biblioteca express
const app = express(); //subir aplicação

mongoose.connect(process.env.MONGODB_PATH,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //express pode utilizar body do tipo json
app.use(routes);

app.listen(3333);