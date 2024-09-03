import crypto from "crypto";

const createTimestamp = () => {
  return new Date.now();
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
