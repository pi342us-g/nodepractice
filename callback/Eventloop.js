// they allow asynchronous operation

// first operation
console.log("First statement")

// second operation
setTimeout(()=>{
    console.log("Second Statement")
},1000)

// third operation
console.log("Third statement")

// fourth operation
console.log("Fourt operation")

// fifth operation
setTimeout(()=>{
    console.log("Fifth Operation")
},3000)