const fs = require("fs")

const writableStream = fs.createWriteStream("output1.txt")

writableStream.write("Hello there are you on \n")
writableStream.write("Are you all on \n")
writableStream.write("Here is where all programmers work for freelance \n")

writableStream.end()

writableStream.on("finish",()=>{
    console.log("Succesfully written")
})