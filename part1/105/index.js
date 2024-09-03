const express = require("express");

const PORT = 8080;

const app = express();

app.use("/", (req, res) => {
  return res.send("Response: server works");
});

app
  .listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`);
  })
  .on("error", (error) => console.log(`Server error: ${error}`));
