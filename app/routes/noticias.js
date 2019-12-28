var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticias', function(req, resp){  
   
      var conn = dbConnection();
      conn.query('select * from noticias', function(error, result){
          resp.render("noticias/noticias", {noticias: result});
      });
     
    });
};
