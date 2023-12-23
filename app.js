require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const recordRoute = require('./routes/record');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
    .connect('mongodb://localhost:27017/qoala')
    .then((e) => console.log('MongoDB Connected'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({extended: false}));

app.get('/', async (req, res) => {
    return  res.render('home');
});

app.use('/record', recordRoute);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));