// import thefs module
// use the utf-8 encoding type

const fs=require("fs");
// high watermark is used to divide the buffer  into same buffer bytes

const readStream = fs.createReadStream("input.txt",{highWaterMark: 30})
// simulate how data get transferred fromm input.txt into bytes
readStream.on("data",(chunk)=>{
    console.log("New packets of data received: "+ chunk.toString())
})
// below event will be triggered when entire data has been read
readStream.on("end",()=>{
    console.log("Done reading the file...")
});
