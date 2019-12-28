module.exports = function(application){

    application.get('/noticia', function(req, resp){
        
        var conn = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(conn, function(error, result){
            resp.render('noticias/noticia', {noticia : result})
        });
    });
};