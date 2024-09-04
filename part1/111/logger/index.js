const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const logs = path.join("/usr", "/src", "/app", "/files", "/logs.txt");

const createTimestamp = () => {
  return Date(Date.now()).toString();
};

const generateRandomString = () => {
  return crypto.randomBytes(16).toString("hex");
};

const getPongs = () => {
  if (fs.existsSync(logs)) {
    return fs.readFileSync(logs, "utf-8");
  }
  return 0;
};

const app = express();

app.use("/", (req, res) => {
  const time = createTimestamp();
  const pongs = getPongs();
  const randomString = generateRandomString();

  const message = `${time}: ${randomString} \n Ping / Pongs: ${pongs}`;

  res.send(message);
});

app
  .listen(PORT, () => {
    console.log(`Server output running in port: ${PORT}`);
  })
  .on("error", (error) => console.log(`Error: ${error}`));
