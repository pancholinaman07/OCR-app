require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const recordRoute = require('./routes/record');
const {logReqRes} = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
    .connect(`mongodb+srv://pancholinaman:pancholinaman@cluster0.7zc51v4.mongodb.net/qoala?retryWrites=true&w=majority`)
    .then((e) => console.log('MongoDB Connected'));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve('./public')));
app.use(logReqRes("logs/logs.txt"));

app.get('/', async (req, res) => {
    return  res.render('home');
});

app.use('/record', recordRoute);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));