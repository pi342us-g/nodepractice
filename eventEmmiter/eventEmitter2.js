// import the event emitter
const EventsEmitter = require("events")

// create an instance of the vent
const Emitter = new EventsEmitter()


//turn on the event
Emitter.on("start", (name) => {
  console.log(`Hello ${name}, I wish you good...`);
});
// triggering an event..
Emitter.emit("start","Pius")
Emitter.emit("start", "Feliz");