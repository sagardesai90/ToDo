const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const config = require('config');

//Bodyparser Middleware
app.use(express.json())
//  DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    }) //adding new mongo url parser
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/tasks', require('./routes/api/tasks'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));