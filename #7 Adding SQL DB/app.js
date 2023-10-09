const path = require('path');

const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/errors');

const seqEnv = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

seqEnv.sync()
    .then(result =>{
        app.listen(3000, ()=>{
            console.log('server is listening at http://localhost:3000')
        });
    }).catch(err =>{
        console.log(err);
    })

