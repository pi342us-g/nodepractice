// import chalk dependencies
const chalk = require("chalk")


console.log(chalk.red("Hello there"))
console.log(chalk.blue("This is another line of code"))
console.log(chalk.bgYellow("The server is already running"))
console.log()


// how to create node application   npm init -y
// how to install packages either globally or locally
// how to configure the start script out of the package.json file


// create a new node project that contain a function which find the sum of three numbers
// inside  installchalk package and use it on out put

// import the module so that we can use it
const welcome = require("./welcome")

// invoke the function sayHello() which is inside the module welcome.js
welcome.sayHello()

// access the current date inside of module welcome
console.log("The date is " + welcome.currDate)
console.log("The time is " +  welcome.currTime)
console.log("The company is called " + welcome.companyName)