var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

/**middleware */
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* inclusão das rotas no consign e execução dentro do servidor */
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;