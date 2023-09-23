const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin')
const homeRouter = require('./routes/home')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoute);
app.use(homeRouter);

app.listen(3000);