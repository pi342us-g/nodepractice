// import file system
const fs = require("fs")

const readStream = fs.createReadStream("input1.text","utf-8")

readStream.on("data",(chunk)=>{
    const newText = chunk.trim()
    console.log(newText)
});