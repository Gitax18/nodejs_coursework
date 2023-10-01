// Core and 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// custom modules
const adminRoute = require('./routes/admin')
const shopRouter = require('./routes/shop');

// controllers
const notFoundController = require('./controllers/errors')

const app = express();

// middleware to parse the incoming request data from form 
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// middleware for admin routes
app.use('/admin',adminRoute.route);

// setting globle values
app.set('view engine', 'ejs');
app.set('views', 'views');

// middleware for home route
app.use(shopRouter);

// middleware to handle page which are not present
app.use(notFoundController.get404)

app.listen(3000);