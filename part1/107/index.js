const crypto = require("crypto");
const express = require("express");

const PORT = 8005;

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

const rndStr = generateRandomString();

setInterval(() => {
  main(rndStr);
}, 5000);

const app = express();

app.use("/", (req, res) => {
  const status = main(rndStr);
  res.send(`Current status: ${status}`);
});

app
  .listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
  })
  .on("error", (error) => console.log(`Error: ${error}`));
