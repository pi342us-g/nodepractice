// they are programms that allow others to execute even if the process of other function are not complete
// non blocking

const fs = require("fs")
const chalk = require("chalk")

fs.readFile("input.txt", function (err, data) {
  console.log(chalk.bgYellow.whiteBright(data.toString()));
});

console.log(chalk.red("This line of code (process) will execute first"))