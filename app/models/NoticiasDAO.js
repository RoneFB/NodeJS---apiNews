function NoticiasDAO(conn){
  this._connection = conn;

}

NoticiasDAO.prototype.getNoticias = function(callback){
  this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
  this._connection.query('select * from noticias where id_noticias = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}