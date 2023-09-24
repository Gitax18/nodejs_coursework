const express = require('express');
const bodyParse = require('body-parser');
const path = require('path');

const routeHome = require('./routes/home');
const routeAdmin = require('./routes/users');

const app = express();

app.use(bodyParse.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', routeAdmin);
app.use(routeHome);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5555);