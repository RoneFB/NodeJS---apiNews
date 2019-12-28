var http = require('http');

var sever  = http.createServer( function(req, resp){
    var categoria = req.url;
    if(categoria == '/tecnologia'){
        resp.end("<html><body>Potal de notícias de Técnologia </body></html>");
    }else if(categoria == '/moda'){
        resp.end("<html><body>Potal de notícias...moda </body></html>");
    }else if(categoria == '/beleza'){
        resp.end("<html><body>Potal de notícias...beleza </body></html>");
    }else{
        resp.end("<html><body>Potal de notícias... </body></html>");
    }
   

}); sever.listen(3000);