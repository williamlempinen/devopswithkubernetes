const crypto = require("crypto");
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 3000;
const logsFile = path.join(
  "/usr",
  "/src",
  "/app",
  "/files",
  "/logs-output.txt",
);

const createTimestamp = () => {
  return Date(Date.now()).toString();
};

const generateRandomString = () => {
  return crypto.randomBytes(16).toString("hex");
};

const main = (randomString) => {
  const time = createTimestamp();
  const msg = `${time}: ${randomString}`;
  console.log(msg);
  return msg;
};

const writeLogsToFile = (message) => {
  fs.writeFileSync(logsFile, message, { flag: "a" });
};

const rndStr = generateRandomString();

setInterval(() => {
  const msg = main(rndStr);
  writeLogsToFile(msg);
}, 5000);

const app = express();

app.use("/", (req, res) => {
  const status = main(rndStr);
  res.send(`Current status: ${status}`);
});

app
  .listen(PORT, () => {
    console.log(`Server generator running in port: ${PORT}`);
  })
  .on("error", (error) => console.log(`Error: ${error}`));
