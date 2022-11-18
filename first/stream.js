const { createReadStream, read } = require("fs");

const reader = createReadStream("./largeFile.txt", { encoding: "utf8" });

reader.on("data", (res) => {
  console.log(res);
});
reader.on("open", (res) => {
  console.log("\n\nFile Opened\n\n");
});
reader.on("close", (res) => {
  console.log("\n\nFile Closed\n\n");
});
