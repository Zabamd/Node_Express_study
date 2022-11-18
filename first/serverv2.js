const http = require("http");
const { readFile } = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  readFile("./index.html", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    if (req.url === "/") res.write(data);
    res.end();
  });
});
server.listen(5500, () => {
  console.log("Server listening on port 5500....");
});
