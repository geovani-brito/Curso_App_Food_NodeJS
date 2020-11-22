const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const variables = require('../bin/configuration/variables')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

mongoose.connect(
    variables.Database.connection, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
mongoose.set('useCreateIndex', true);
    

module.exports = app;