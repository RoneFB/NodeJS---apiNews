module.exports = function(app){

    app.get('/noticias', function(req, resp){  
     
      var mysql = require('mysql');
      var conn  = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'portal_noticias'
      });

      conn.query('select * from noticias', function(error, result){
          resp.render("noticias/noticias", {noticias: result});
      });

     
    });
};
