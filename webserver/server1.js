// import the http core module
const http = require('http');
const fs = require("fs")

// create the web server
const server = http.createServer((req,res)=>{
fs.readFile('home.html',(err,data)=>{
    // have two conditions 
    // 1 if the file was successfully read
    // 2 if there was an error reading the file
    if(err){
        res.writeHead(500,{'content-type': 'text/plain'})
    }else{
        res.writeHead(200,{'content-type': 'html'});
        res.end(data);
    }
})
})
// specufy which port is the server running?
server.listen(3000,()=>{
    console.log("The server is already running")
})