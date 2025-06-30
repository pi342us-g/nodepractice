// import the fs module
const fs = require("fs");

// create a writable stream
const writableStream = fs.createWriteStream("output.txt");

// write data/info into the created stream
writableStream.write("Hello Pius how have you been?\n");
writableStream.write("We are learning streams\n")
writableStream.write("I love programming cause its gona pay me well\n")

// when the writing process finishes, notify the user.
writableStream.end();
writableStream.on("finish",()=>{
    console.log("Data has been successfully written into the file")
});

// handle errors incase of any
writableStream.on("error",()=>{
    console.log("Error writing the file ..."+ error)
});