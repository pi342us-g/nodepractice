// its where a programme wait for one task to finish before going to next

const fs = require("fs")
const chalk = require("chalk")

data = fs.readFileSync('input.txt');//Blocking
console.log(chalk.bgBlue.whiteBright(data.toString()));
console.log("Program Ended...")