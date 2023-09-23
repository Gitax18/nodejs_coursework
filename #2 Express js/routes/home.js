const express = require('express');


const router = express.Router();

const _form = `
<br>
<form action='done' method='POST'>
    <label for='name'>Name:</label>
    <input type='text' name='name' id='name' placeholder='John Doe'>
    <button type='submit'>Submit</button>
</form>
`

router.get('/',(req,res,next)=>{
    res.send('<h1>Hello there, express here!</h1>'+'<h2>Fill the Form</h2>' + _form);
})

module.exports = router;