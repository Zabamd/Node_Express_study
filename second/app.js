const express = require("express");
const path = require("path");

const app = express();
const port = 5500;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./about.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
