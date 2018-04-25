const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Book = require('../models/book.schema');

//------ Connecting to Mongo Start --------//
//move this connect to modules/database-connection.js
const databaseUrl= 'mongodb://localhost:27017/library'; //giving location on where our database exits
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () =>{
    console.log(`mongoose connected to ${databaseUrl}`);
})

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
})

module.exports = databaseUrl