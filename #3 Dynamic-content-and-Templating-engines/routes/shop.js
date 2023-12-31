const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminRoute = require('./admin');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.table(adminRoute.products);
    res.render('shop', { 
        prods: adminRoute.products,
        pageTitle: 'My Shoppy',
        path: '/'
    });
})

module.exports = router;