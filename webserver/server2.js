// recap on web servers
// import the server first
const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end("My first server");
});

server.listen(3000,()=>{
    console.log("The server is running")
});