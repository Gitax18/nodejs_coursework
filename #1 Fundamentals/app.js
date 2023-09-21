// Build first server

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(res);
    return '<h1>Hello world</h1>'
});

server.listen(3000);
