const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/authors', AuthorController.findAllAuthors);
    app.get('/authors/:id', AuthorController.findOneAuthor);
    app.put('/authors/:id', AuthorController.updateAuthor);
    app.post('/authors', AuthorController.createAuthor);
    app.delete('/authors/:id', AuthorController.deleteAuthor)
}