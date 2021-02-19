require("dotenv").config();

module.exports = {
  AMAZON_COMPARE_URL: "https://graphql.hagglezon.com",
  SMTP_USERNAME: process.env.SMTP_USERNAME,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
};
