// create a http module
const http = require("http");

// import the file system
const fs = require('fs')

// create a server
const myServer = http.createServer((req,res) =>{
    // using file system read the html file created
    fs.readFile('about.html',(err,data)=>{
        // check conditions
        if(err){
            res.writeHead(500,{'content-type':'html'})

        }
        
       
    })

})
myServer.listen(3000,()=>{
    console.log("The server is running")
})