const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.write(data);
    res.end();
  });
});

server.listen(5000, () => {
  console.log("Server listening on port 5000....");
});
