require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

//estudar documentação da biblioteca express
const app = express(); //subir aplicação

mongoose.connect('mongodb+srv://victorhugo:vhs!))kl@cluster0.vodgm.mongodb.net/events?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //express pode utilizar body do tipo json
app.use(routes);

app.listen(3333);