const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const _form = `
<br>
<form action='done' method='POST'>
    <label for='name'>Name:</label>
    <input type='text' name='name' id='name' placeholder='John Doe'>
    <button type='submit'>Submit</button>
</form>
`
app.use(bodyParser.urlencoded({extended: false}));

app.use('/done',(req,res,next)=>{
    res.send('<h1>Check Your File</h1>');
    console.log(req.body);
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello there, express here!</h1>'+'<h2>Fill the Form</h2>' + _form);
})

app.listen(3000);