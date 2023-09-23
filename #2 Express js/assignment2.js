const express = require('express');

const app = express();

app.use('/users',(req,res,next)=>{
    res.send('<h1>Our Users Data</h1>');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to our home page</h1>');
})

app.listen(4000);