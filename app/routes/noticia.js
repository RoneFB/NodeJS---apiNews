module.exports = function(application){

    application.get('/noticia', function(req, resp){
        
        var conn = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

        NoticiasDAO.getNoticia(function(error, result){
            resp.render('noticias/noticia', {noticia : result})
        });
    });
};