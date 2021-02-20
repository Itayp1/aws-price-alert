const priceCompare = require("./priceCompare");
const cron = require("node-cron");
const email = require("./email");
const sendSms = require("./sns_publishsms");

let products = [];

setInterval(() => {
  products = [];
}, 1000 * 60 * 60);

const price_alert = async (productId) => {
  const [isLower, product] = await priceCompare(productId);
  if (isLower) {
    if (products.includes(product)) {
      console.log(`didnt send sms again  product:${product}`);
      return;
    }
    email(product);
    sendSms(product);
    products.push(product);
    console.log(`the price lower send email ${product}`);
  } else {
    console.log(`the price regular ${product}`);
  }
};

module.exports = () => {
  // Schedule tasks to be run on the server.
  cron.schedule("*/10 * * * * *", function () {
    // cron.schedule("*/10 * * * *", function () {
    console.log("running a task every 2 minutes");
    price_alert("B07B2X1VXZ");
    price_alert("B07KXCTRF6");
  });
};
