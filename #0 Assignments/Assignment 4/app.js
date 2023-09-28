// Importing Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index')
const usersRoute = require('./routes/users')

// creating express 
const app = express();

// configuration settings
app.set('view engine', 'ejs');
app.set('views', 'views');

// configuration middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

// handling routes
app.use(indexRoute.routes);
app.use(usersRoute.routes);

app.use((req,res,next)=>{
    res.render('404', {pageTitle: 'Error 404 :('})
})


app.listen(5555);

