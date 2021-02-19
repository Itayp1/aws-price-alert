const priceCompare = require("./priceCompare");
const cron = require("node-cron");
const email = require("./email");

const price_alert = async (productId) => {
  const [isLower, product] = await priceCompare(productId);
  if (isLower) {
    email(product);
    console.log(`the price lower send email ${product}`);
  } else {
    console.log(`the price regular ${product}`);
  }
};

module.exports = () => {
  // Schedule tasks to be run on the server.
  cron.schedule("*/2 * * * *", function () {
    console.log("running a task every 2 minutes");
    price_alert("B07B2X1VXZ");
    price_alert("B07KXCTRF6");
  });
};
