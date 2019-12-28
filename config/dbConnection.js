var mysql = require('mysql');
var connMysql = function(){
    console.log("Conexão Estabelecida");
    return mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}

module.exports = function(){
    console.log('Módulo de Conexão carregado! ');
    return connMysql;
    
}