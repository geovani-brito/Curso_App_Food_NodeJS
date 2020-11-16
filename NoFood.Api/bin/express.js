const express = require('express');
const bodyParser = require('body-parser');
const categoriaRouter = require('../routes/categoria-router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api/categoria', categoriaRouter);
module.exports = app;