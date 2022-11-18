const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.writeHead(200, "OK", { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, "Route doesn't exist", { "content-type": "text/html" });
    res.end("Good luck next time");
  }
});

server.listen(5500, () => {
  console.log("Started Server");
});
