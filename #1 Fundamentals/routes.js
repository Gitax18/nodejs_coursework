const fs = require('fs');


const _main = `
<html>
    <head>
        <title>my node page</title>
    </head>
    <body>
        <form action='message' method='POST'>
            <label for="text">Enter your name:</label>
            <input type="text" name="text"></input>
            <button type="submit">send</button>
        </form>
    </body>
</html>
`

const msg = `
    <body>
        <h1>Welcome to main page</h1>
    </body>
`



const routeHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url == '/'){
        res.write(_main);
        return res.end();
    }
    if(url == '/message' && method == 'POST'){
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const mes = parsedBody.split('=')[1].split('+').join(' ')
            fs.writeFileSync('msge.txt', mes);
        })
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
    }
}

module.exports = {
    handler:routeHandler,
};