// Importing Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// router 
const router = express.Router()

// managing routes 
router.get('/', (req, res, next)=>{
    res.render('index', {
        pageTitle: 'Home'
    })
})

// exporting router
exports.routes = router; 