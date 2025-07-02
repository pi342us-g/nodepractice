// compressing the files for esier transfer
// import the file system  core component
const fs = require('fs');

// import the zlib module for compressing files
const zlib = require('zlib');

// import the build i n zlib module for compressing (gzig,dflate, brotli)
// some chain of event shall happen
// 1. it will read the specified files 
// 2. it compresses the file
// 3. creates a new file withspecified extensions

// step 1. Read the content inside of the input.txt
// create a readable stream for input.txt
fs.createReadStream("input.txt")

// step 2 Pipe the readable stream throuh the gzig transform stream
// createGzip returns a stream that compresses data using gzig algorithim
.pipe(zlib.createGzip())

// step 3pipe the compressed data to a writeable stream. Where? into input.txt.gz
// This stream receives the compressed chunk of data and writes it into the disk
.pipe(fs.createWriteStream("input.txt.gz"))

// step 4 Listen to finish event after succesful write action
// This event will be triggered immediately the data is written into the new stream
.on("finish",()=>{
    console.log("File successfully compressed...")
})

// create a stream that fetches data from a given data/domain and saves the same
//into online data.txt