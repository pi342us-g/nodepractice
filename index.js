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

// import summation module
const summation = require("./summation")
// access the function in summation module
summation.addition(4,5,6)

// create a module called areaofsquare
// inside create a function that accepts parameters and find the area ofsquare
const areaOfSquare = require("./areaOfSquare")
areaOfSquare.area(43)
areaOfSquare.area(78)

// import the module mathUtil
const mathUtil = require("./mathUtil")

// acccess the methos functions inside of  the module
console.log("division" + mathUtil.division(70, 10));
console.log("Multiplication" + mathUtil.multiply(23,54,98))
console.log("Power" + mathUtil.power(45))

// create model string util
//have three function: one to transforn string enterred into uppercase
// into lowercase
//count letters of a string then import the function 
const stringUtil = require("./stringUtils")
stringUtil.strUpperCase("James");
stringUtil.strLower("MICHAELL");
stringUtil.strCount("Fghj456");