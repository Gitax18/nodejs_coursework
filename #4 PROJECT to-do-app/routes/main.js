const express = require('express');
const path = require('path');

// creating router to handle routes
const router = express.Router();

const todos = [];

router.get('/main', (req,res)=>{
    res.render('main', {
        pageTitle: 'Atodo- Main',
        path: '/main',
        todos: todos,
    });
})

router.post('/submit', (req,res)=>{
    todos.push(req.body);
    console.table(todos);
    res.redirect('/main');
})

// exporting routes
module.exports = router;