module.exports = function(application){

  application.get('/noticias', function(req, resp){  
      
      var conn = application.config.dbConnection();
      var noticiasModel = application.app.models.noticiasModel;

      noticiasModel.getNoticias(conn, function(error, result){
        resp.render("noticias/noticias", {noticias: result});
      });

     
    });
};
