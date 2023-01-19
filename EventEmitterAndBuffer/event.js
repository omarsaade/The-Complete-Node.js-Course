// Event Emitter Object
// this event has been implemented all in just javacsript and there is no c++ behind it
// asynchronous : app will continue its work while waiting for those events
// event driven : lama yenba3at shi 3al cpu wel cpu ye5do async  w ya3mlo handle 3ade w bi zet el wa2et yfut li baado
// we are issuing commands we are issuing events and our cpu is responding to those events and it does them
//                    ASynchronously
const EventEmitter = require("events");

//inherit from this event emitter Object
class Emitter extends EventEmitter {}

// new instance of this Class
const myE = new Emitter();

// listener for events
// and respond to a event
// those on will happen in order from top to bottom
myE.on("foo", () => {
  console.log("An event occurred  2");
});

myE.on("foo", () => {
  console.log("An event occurred  1");
});

myE.on("foo", (x) => {
  console.log("An event occurred with a parameter");
  console.log(x);
});

myE.on("bar", () => {
  console.log("An event occurred bar.");
});

// there is a method called object.once ..it will be called ones.
myE.once("mar", () => {
  console.log("hello");
});

//fire this event
myE.emit("foo"); //3 times 4 logs
//fire this event
myE.emit("foo", "some text"); //3 times 4 logs
//fire this event
myE.emit("mar"); //1
myE.emit("mar"); //2
//....
// myE.emit("mar"); // after the first emits up , the rest will be like that u are
// emitting an event that doesn't exist.

////
