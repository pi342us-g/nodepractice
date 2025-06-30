// import the file system core components from node
const fs = require("fs")

// read file input.txt . We use 'utf-8' to encode the received packet of information
const readStream = fs.createReadStream("input.txt","utf-8");

// below event will be triggered everytime a chunk of data is available
readStream.on("data",(chunk)=>{
    const newText = chunk.trim().toUpperCase()
    console.log("The read of data from input.txt are\n\n" + newText)
});

// below event will be triggered when entire data has been read
readStream.on("end",()=>{
    console.log("Done reading the file...")
});
