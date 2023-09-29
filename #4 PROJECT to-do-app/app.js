/*
A to-do application project built using node.js, express.js, and ejs templating engine.
Created by : Gitanshu sankhla
Date: 29th sept' 2023
*/

// Core modules 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const homeRoute = require('./routes/index');
const mainRoute = require('./routes/main');

// creating app
const app = express();

// app settings
app.set('view engine', 'ejs');
app.set('views', 'views');

// app configuration middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app routes management
app.use(homeRoute);
app.use(mainRoute);

// listening to port 3000, link localhost:3000
app.listen(3000);