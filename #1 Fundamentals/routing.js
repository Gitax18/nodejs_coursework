const http = require('http');

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
<html>
    <head>
        <title>my node page</title>
    </head>
    <body>
        <h1>Welcome to main page</h1>
    </body>
</html>
`

const server = http.createServer(function(req, res){
    const url = req.url;
    if (url == '/'){
        res.write(_main);
        return res.end();
    }
    if(url == '/message'){
        console.log(req.url)
        res.write(msg);
        return res.end();
    }
})

server.listen(3000)