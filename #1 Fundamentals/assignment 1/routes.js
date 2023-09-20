const fs = require('fs');

const userHtml = `
<ul>
    <li>Gitanshu sankhla</li>
    <li>Tanay sankhla</li>
    <li>Shagun sankhla</li>
    <li>Khanak sankhla</li>
    <li>Khyati gehlot</li>
    <li>Kanishka chauhan</li>
    <li>Manu raj</li>
</ul>
`

const addNewForm = `
<form action='createuser' method='POST'>
    <label for='username'>Enter Username: <label>
    <input type='text' id='username' name='username' placeholder="John Doe" />
    <button type="submit"> Add New User </button>
</form>
`


const handleRoutes = function(req, res){
    const url = req.url;

    if (url === '/'){
        res.write('<h1>Hello Admin</h1>');
        res.write('<strong>Add new User</strong>')
        res.write(addNewForm)
        return res.end();
    }
    
    if (url === '/users'){
        res.write('<h1>Our Users List</h1>');
        res.write(userHtml);
        return res.end();
    }

    if(url === '/createuser' ){
        const body = [];
        res.write('<p>Hello</p>')
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        });
        req.on('end', ()=>{
            const parsed = Buffer.concat(body).toString();
            const parsedBody = parsed.split('=')[1];
            console.log(parsed);
            fs.writeFileSync('user.txt', parsedBody);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })
    }
}

exports.handler = handleRoutes;