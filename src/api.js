const axios = require("axios");

const { AMAZON_COMPARE_URL } = require("../server_config");

const request = (product) => {
  return {
    operationName: "SearchResults",
    variables: {
      lang: "en",
      currency: "EUR",
      filters: {},
      search: product,
    },
    query:
      "query SearchResults($search: String!, $country: String, $currency: String!, $lang: String!, $page: Int, $filters: SearchFilters) {\n  searchProducts(searchTerm: $search, country: $country, productConfig: {language: $lang, currency: $currency}, page: $page, filters: $filters) {\n    products {\n      id\n      title\n      brand\n      tags\n      related_items\n      prices {\n        country\n        price\n        currency\n        url\n        __typename\n      }\n      __typename\n    }\n    next {\n      country\n      page\n      __typename\n    }\n    __typename\n  }\n}\n",
  };
};

module.exports = async (product) => {
  const req = request(product);
  const res = await axios.post(AMAZON_COMPARE_URL, req);

  return res.data.data.searchProducts.products[0];
};
