// Environmental variable loaded
require('dotenv').config();

const path = require("path");

// Express Frame Work
const express = require('express');

// Routes
const recordRoute = require('./routes/record');

// Config
const {connectMongoDb} = require("./config/connection");

// Middlewares
const {logReqRes} = require("./middlewares/logger");

// Initialise the app
const app = express();

// Get the PORT
const PORT = process.env.PORT || 8000;

// Connect To Database
connectMongoDb(`mongodb+srv://pancholinaman:pancholinaman@cluster0.7zc51v4.mongodb.net/qoala?retryWrites=true&w=majority`)
    .then((e) => console.log('MongoDB Connected'));


// Set Views
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


// Middlewares added
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve('./public')));
app.use(logReqRes("logs/logs.txt"));

// Routes added
app.get('/', async (req, res) => {
    return  res.render('home');
});
app.use('/record', recordRoute);


// Start the server
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));