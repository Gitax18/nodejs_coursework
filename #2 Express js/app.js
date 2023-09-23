const express = require('express');
const http = require('http');

const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})

app.use((req,res,next)=>{
    console.log('On another middleware')
    res.send('<h1>Hello there, express here!</h1>')
})

app.listen(3000);