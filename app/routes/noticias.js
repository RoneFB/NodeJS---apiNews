module.exports = function(application){

  application.get('/noticias', function(req, resp){  
      
      var conn = application.config.dbConnection();
      var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

      NoticiasDAO.getNoticias(function(error, result){
        resp.render("noticias/noticias", {noticias: result});
      });

     
    });
};
