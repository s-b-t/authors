const Author = require('../models/author.model');

module.exports.findOneAuthor = (request, response) => {
    Author.findOne({_id: request.params.id})
        .then(author => response.json(author))
        .catch(error => response.json({message: 'Something went wrong retrieving ONE AUTHOR!', error: error}))
}

module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(authors => response.json({authors}))
        .catch(error => response.json({message: 'Something went wrong retrieving ALL AUTHORS!', error: error}));
}

module.exports.createAuthor = (request, response) => {
    const {firstName, lastName} = request.body;
    Author.create({
        firstName,
        lastName
    })
        .then(author => response.json(author))
        .catch(error => response.status(400).json({message: 'Something went wrong CREATING AN AUTHOR!', error}))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(error => response.status(400).json({message: 'Something went wrong UPDATING AN AUTHOR!', error}))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deletedAuthor => response.json(deletedAuthor))
        .catch(error => response.json({message: 'Something went wrong DELETING A PRODUCT!', error: error}))
}

