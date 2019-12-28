var app = require('./config/sever');

// require('./app/routes/noticias')(app); Rotas estão sendo consideradas pelo Consign
// require('./app/routes/home')(app);
// require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log('Servidor On');
})