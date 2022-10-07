const { Console } = require('console');
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html'})
    res.write("user hit the server");
    res.end();
})
server.listen(5000);