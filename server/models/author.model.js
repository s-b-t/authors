const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, '* First Name is required to continue!'],
        minlength: [3, '* Atleast 3 Characters Required for First Name!']
    },
    lastName: {
        type: String,
        required: [true, '* Last Name is required to continue!'],
        minlength: [3, '* Atleast 3 Characters Required for Last Name!']
    }
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;