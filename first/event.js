const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("trigger", () => {
  console.log("triggered");
});
customEvent.on("trigger", () => {
  console.log("triggered");
});
customEvent.emit("trigger");
