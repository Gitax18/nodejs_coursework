const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminRoute = require('./admin');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.table(adminRoute.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router;