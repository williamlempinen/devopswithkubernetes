const express = require("express");

const PORT = 5000;

const app = express();

let reqCounter = 0;

app.use("/pingpong", (req, res) => {
  reqCounter += 1;
  res.send(`pong ${reqCounter}`);
});

app
  .listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
  })
  .on("error", (error) => {
    console.log(`Server error: ${error}`);
  });
