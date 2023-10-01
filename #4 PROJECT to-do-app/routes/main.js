const express = require('express');
const path = require('path');

// creating router to handle routes
const router = express.Router();

const mainTodos = [];
const workTodos = [];

router.get('/main', (req,res)=>{
    res.render('main', {
        pageTitle: 'Atodo- Main',
        path: '/main',
        todos: mainTodos,
    });
})

router.get('/work', (req,res)=>{
    res.render('work', {
        pageTitle: 'Atodo- Work',
        path: '/work',
        todos: workTodos,
    });
})

router.post('/submit', (req,res)=>{
    
    if(req.body['type-main'] === 'on' && !req.body['type-work']){
        mainTodos.push(req.body)
        res.redirect('/main');
    } else if (req.body['type-work'] === 'on' && !req.body['type-main']){
        workTodos.push(req.body)
        res.redirect('/work');
    } else if (req.body['type-work'] === 'on' && req.body['type-main'] === 'on'){
        mainTodos.push(req.body);
        workTodos.push(req.body);
        res.redirect('/main');
    }
})

// exporting routes
module.exports = router;