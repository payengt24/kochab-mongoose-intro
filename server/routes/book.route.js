const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Book = require('../models/book.schema');

//move route to /routes/book.route.js
// get route for /book
router.get('/', function (req, res) {
    // database Read/Find
    Book.find({})
        .then((dataFromDatabase) => {
            //success, good thing happened
            console.log('data from database', dataFromDatabase)
            res.send(dataFromDatabase)
        })
        // error, bad things happened
        .catch((error) => {
            console.log('error with Book.find', error)
            res.sendStatus(500);
        });     
});

module.exports = router;