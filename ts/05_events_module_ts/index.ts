import { EventEmitter} from "events";

// create instance
const emitter = new EventEmitter();

// listen
emitter.on("greet", ():void=>{
    console.log("Hello")
})

// listener 2
emitter.on("greet", ()=>{
    console.log("Hello from listener 2");
})

interface MessageData{
    user:string;
    text:string;
}

emitter.on("message", (data:MessageData):void=>{
    console.log("Message received:", data);
})
emitter.emit("message", {user: "Akash", text:"Hello Event System"})