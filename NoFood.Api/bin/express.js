const express = require('express');
const bodyParser = require('body-parser');
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
module.exports = app;