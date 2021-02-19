const express = require("express");
const app = express();
const cronJob = require("./cronJob");

app.get("/health", (req, res) => {
  return res.json("hello world itayp the king!!");
});

app.listen(3000, () => {
  console.log("listen on port 3000");
  cronJob();
});
