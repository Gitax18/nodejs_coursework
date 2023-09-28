// Importing Modules
const express = require('express');
const path = require('path');

// router 
const router = express.Router()
let data = [];

// managing routes 
router.get('/users', (req, res, next)=>{
    res.render('users', {
        data: data,
        pageTitle: 'Users'
    })
});

router.post('/submit', (req,res,next)=>{
    data.push(req.body);
    console.table(data);
    res.redirect('/users');
})

// exporting router
exports.routes = router; 