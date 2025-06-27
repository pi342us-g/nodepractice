// import the events
const EventsEmitter = require("events")

// create an instance of an evenet
const orderEmitter =new EventsEmitter();

// create a listener for the order
orderEmitter.on("orderPlaced",(orederId)=>{
    console.log(`order with the id #${orderId} has been placed`)
});

// create a listener for sending a confirmation
orderEmitter.on("orderPlaced",(orderId)={
    console.log(`Sending a confirmation for the order id #${orderId}`)
})

// create a listener that checks whether the itemwhich was ordered is available
orderEmitter.on("orderPlaced",(orderId)=>{
    console.log(`Checking stock for the orderId #${orderId} `)
});

// generate a confirmation when you have confirmed the availability of item in stock
orderEmitter.on("orderPlaced",(orderId)=>{
    console.log(`The item with the order ID #${orderId} is available in stock`)

});
// create a function that simulate this:
function placedOrder(orderId){
    console.log(`\n ... New Order Incoming`)
    orderEmitter.emit("orderPlaced", orderId)
};

// invoke the function to simulate several order with different ids
placedOrder(101)

// assignment 
//1 using an eventsEmitter , simulate a person trying to log in untill the admin is notified
// 2 using event emitter simulate the payment process that would happen if someone pay for netflix subscription
//3 using eventEmitter simulate the process that happens when someone is downloading a file (music,document) from online 