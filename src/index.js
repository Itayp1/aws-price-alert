const express = require("express");
const app = express();
const cronJob = require("./cronJob");

app.get("/health", (req, res) => {
  const status = {
    status: "UP",
    price_limit: "5011",
  };
  return res.json(status);
});

app.listen(3001, () => {
  console.log("listen on port 3001");
  cronJob();
});
