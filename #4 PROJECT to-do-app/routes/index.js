const express = require('express');
const path = require('path');

// creating router to handle routes
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index', {
        pageTitle: 'Atodo',
        path: '/'
    });
})

// exporting routes
module.exports = router;