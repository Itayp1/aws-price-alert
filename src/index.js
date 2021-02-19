const express = require("express");
const app = express();
const cronJob = require("./cronJob");

app.get("/health", (req, res) => {
  const status = {
    status: "UP",
    price_limit: "501",
  };
  return res.json(status);
});

app.listen(3000, () => {
  console.log("listen on port 3000");
  cronJob();
});
