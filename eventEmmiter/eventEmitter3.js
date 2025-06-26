// import the events
const EventsEmitter = require("events")

// create an instance of eventEmitter

const bulbEmitter = new EventsEmitter()

// ---ON Events
bulbEmitter.on("bulbSwitchedOn",(location)=>{
    console.log(`The bulb in the ${location} is now on`)
})

bulbEmitter.on("bulbSwitchedOn",(location)=>{
    console.log(`The power consumption check started for ${location}`)
})

bulbEmitter.on("bulbSwitchedOn", (location) => {
  console.log(`App updated: ${location} bulb turned on now`);
});

// function to swithch on the bulb
function switchOnBulb(location){
    console.log("\n--- Switching on Bulb")
    bulbEmitter.emit("bulbSwitchedOn", location)
};

// invoke the function to turn on the bulb
switchOnBulb("Dining room")