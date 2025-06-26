const chalk = require("chalk")

const summation ={
    // adding numbers
    addition (a,b,c){
        let total = a+b+c;
        console.log("The sum is "+ chalk.red(total))
    }

};
module.exports = summation;