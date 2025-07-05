// import express module
const Express = require('express');

const app = Express();

app.get('/',(req,res)=>{
    res.send("Landing Page")
});
// another route
app.get('/second',(req,res)=>{
    res.send("This is the second page")
});
app.get('/third',(req,res)=>{
    res.send("This is the third page/ route accessed")
})

app.get('/fourth',(req,res)=>{
    res.send("The fourth and my second last page goes here")
});
app.get('/',(req,res)=>{
    res.send("This is the fifth and the last page")
})

// specify onto which port the server is running
app.listen(3000,()=>{
    console.log("Server running")
})
// create 2 additional routes and try to access them on the browser