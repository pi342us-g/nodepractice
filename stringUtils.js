const stringUtil ={
    // to uppercase
    strUpperCase(name){
        console.log(`This ${name.toUpperCase()} has been transformed into uppercase`)

    },
    // lowercase
    strLower(email){
        console.log(
          `This email ${email.toLowerCase()}has been transformed to lowercase`
        );

    },
    // counting letters
    strCount(word){
        console.log(`This word has ${word.length} chars`)
    }
}
module.exports = stringUtil;