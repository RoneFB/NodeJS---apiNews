module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, resp){
        resp.render("admin/form_add_noticia")
    })
    
    app.post('/noticias/salvar', function(req, resp){
        var noticias = req.body;

        resp.send(noticias)
    })
};
