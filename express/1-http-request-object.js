const { Console } = require('console');
const http = require('http');
const server = http.createServer((req,res)=>{
    //console.log(req.method);
    //console.log(req.url)
    const url = req.url;
    //home page
    if(url==='/')
    {
        res.writeHead(200,{'content-type':'text/json'})
        res.write("home page");
        res.end();
    }
    //about
    else if(url ==='/about')
    {
        res.writeHead(200,{'content-type':'text/json'})
        res.write("about page");
        res.end();
    }
    //error page
    else{
        res.writeHead(404,{'content-type':'text/json'})
        res.write("error page");
        res.end();
    }
    
})
server.listen(5000);