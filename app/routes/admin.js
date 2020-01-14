module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, resp){
        resp.render("admin/form_add_noticia")
    })
    
    application.post('/noticias/salvar', function(req, resp){
        var noticia = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resume', 'Resumo é obrigatório').notEmpty();
        req.assert('resume', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor', 'Resumo é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatório').notEmpty();
       
       var erros = req.validationErrors();
        console.log(erros); 
        if(erros){
            res.render('admin/form_add_noticia', {validacao: erros,  noticia: noticia});
            return;
        }
        //save
        var conn = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(conn);

        NoticiasDAO.salvarNoticia(noticia, function(error, result){
            resp.redirect('/noticias');
        });
    })
};
