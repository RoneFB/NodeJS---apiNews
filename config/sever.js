var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* inclusão das rotas no consign e execução dentro do servidor */
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;