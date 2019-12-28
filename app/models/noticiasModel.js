module.exports = function(){

    this.getNoticias = function(conn, callback){
      conn.query('select * from noticias', callback);
    }

    this.getNoticia = function(conn, callback){
      conn.query('select * from noticias where id_noticias = 1', callback);
    }

    return this;
}