const http = require('http')

// creating the server
const server =  http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text'});
    res.end("This is my test");
});

// creating a listening function on the server
server.listen(3000,()=>{
    console.log("Your  server is already running")
})