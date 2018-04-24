const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const Book = require('./models/book.schema')

//------ Connecting to Mongo Start --------//
const databaseUrl= 'mongodb://localhost:27017/library'; //giving location on where our database exits
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () =>{
    console.log(`mongoose connected to ${databaseUrl}`);
})

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
})

//------ Connecting to Mongo End --------//


// get route for /book
app.get('/books', function (req, res) {
    // database Read/Find
    Book.find({})
        .then((dataFromDatabase) => {
            //success, good thing happend
            console.log('data from database', dataFromDatabase)
            res.send(dataFromDatabase)
        })
        // error, bad things happened
        .catch((error) => {
            console.log('error with Book.find', error)
            res.sendStatus(500);
        });     
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});