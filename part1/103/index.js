const crypto = require("crypto");

const createTimestamp = () => {
  return Date(Date.now()).toString();
};

const generateRandomString = () => {
  return crypto.randomBytes(16).toString("hex");
};

const main = (randomString) => {
  const time = createTimestamp();

  console.log(`${time}: ${randomString}`);
};

const rndStr = generateRandomString();

setInterval(() => {
  main(rndStr);
}, 5000);
