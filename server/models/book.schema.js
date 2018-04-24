const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//where we define out schema
const bookSchema = new Schema ({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true} //don't want author to be unique because an author can author multiple books 
});

//mongoose, use the books collection
//mongoose, please use 'book'
//mongoose say, I automatically pluralize to books
module.exports = mongoose.model('book', bookSchema);