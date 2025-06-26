const chalk = require("chalk")

const areaOfSquare = {
    // area
    area(r){
        let answer = r**2;
        console.log("The answer is " + chalk.bgBlueBright(answer))

    },
};
module.exports = areaOfSquare;