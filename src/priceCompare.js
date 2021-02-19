const amazon_compare_api = require("./api");

const priceCompare = async (productId) => {
  try {
    const product = await amazon_compare_api(productId);
    const prices = product.prices.map(({ price }) => price);
    const lowest_price = Math.min(...prices);
    const url = product.prices.filter(({ price }) => price == lowest_price)[0].url;
    const msg = `lowest_price product:${product.id} title:${product.title} price:${lowest_price} url:${url}`;

    return [lowest_price < 600, msg];
  } catch (error) {
    return [false, "Service Temporarily Unavailable"];
  }
};

module.exports = priceCompare;
