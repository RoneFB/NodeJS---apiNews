module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, resp){
        resp.render("admin/form_add_noticia")
    })
    
    application.post('/noticias/salvar', function(req, resp){
        var noticia = req.body;

        //save
        var conn = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

        NoticiasDAO.salvarNoticia(noticia, function(error, result){
            resp.redirect('/noticias');
        });
    })
};
