const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasks =  require('./routes/api/tasks');
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json())
//  DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/tasks', tasks);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));