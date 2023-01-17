const EventEmitter = require("./events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

const m = () => {
  console.log("listener");
};

// myE.addListener("go", m);
// he m3ala2a bi kam mara bta3mul emit
myE.once("go", m);
myE.on("go", m);
myE.off("go", m);
myE.on("go", () => {
  console.log("hello");
});
myE.on("dodo", () => {
  console.log("hello");
});
myE.on("go", m);
myE.on("go", m);
myE.on("go", m);
myE.listenerCount("go");
console.log(myE);
console.log(myE.listeners); //{ go: [ [Function (anonymous)] ] }
[[Function(anonymous)]];
myE.removeListener("go", m);
myE.emit("go");
// myE.emit("go");

// console.log(myE.listeners);

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

myE.once("mar", () => {
  console.log("hello");
});

myE.emit("foo");
myE.emit("foo", "some text");
myE.emit("mar");
myE.emit("mar");

// {}["go"] =

/*

 _events: [Object: null prototype] {
    go: [ [Function (anonymous)], [Function: m], [Function: m] ],
    dodo: [Function (anonymous)]
  }
  
*/
