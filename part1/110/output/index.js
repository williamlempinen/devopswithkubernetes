const express = require("express");
const fs = require("fs");
const path = require("path");
const logsFile = path.join("/usr", "/src", "/app", "/files", "logs-output.txt");

const PORT = 8000;

const app = express();

app.use("/", (req, res) => {
  if (fs.existsSync(logsFile)) {
    const logs = fs.readFileSync(logsFile, "utf-8");
    res.send(`Logs: ${logs}`);
  }
});

app
  .listen(PORT, () => {
    console.log(`Server output running in port: ${PORT}`);
  })
  .on("error", (error) => console.log(`Error: ${error}`));
