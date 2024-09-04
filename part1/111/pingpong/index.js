const express = require("express");
const fs = require("fs");
const path = require("path");
const logsFile = path.join("/usr", "/src", "/app", "/files", "logs.txt");
const PORT = 8000;

const app = express();

let pongsCounter = 0;

const writePongsToFile = (counter) => {
  fs.writeFileSync(logsFile, `${counter}`, { flag: "w" });
};

app.use("/pingpong", (req, res) => {
  pongsCounter += 1;
  writePongsToFile(pongsCounter);
  res.send(`Ping / Pongs: ${pongsCounter}`);
});

app
  .listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
  })
  .on("error", (error) => {
    console.log(`Server error: ${error}`);
  });
