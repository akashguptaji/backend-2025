// Import EventEmitter
const EventEmitter = require("events");

// create instances
const emitter = new EventEmitter();

// listen
emitter.on("greet", () => {
    console.log("Hello");
})

// listener 2
emitter.on("message", (data) => {
    console.log("message received", data);
})

emitter.emit("message", { user: "Akash", text: "Hello Event System" })