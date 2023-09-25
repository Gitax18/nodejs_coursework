const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoute = require('./routes/admin')
const shopRouter = require('./routes/shop');

const app = express();

// middleware to parse the incoming request data from form 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// middleware for admin routes
app.use('/admin',adminRoute);

// middleware for home route
app.use(shopRouter);

// middleware to handle page which are not present
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);