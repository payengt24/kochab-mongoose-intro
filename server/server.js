const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const Book = require('./models/book.schema')
const bookRoute = require('./routes/book.route')

const databaseConnection = require('./modules/database-connection');


app.use('/book', bookRoute)



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});