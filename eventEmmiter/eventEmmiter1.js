// We need to import the events which is a core module in node js
const EventsEmitter = require("events");

// create an instance of the events
const eventEmitter = new EventsEmitter()

// using the eventsEmitter instance we can access the method function on
// This method acts as our listener if any event gets triggerred

eventEmitter.on("start",()=>{
    console.log("Goodmorning how have you been?")
})
// .emit act as the trigger so when the event is fired the listener will here it
// then it execute the process inside of emitter
eventEmitter.emit("start")