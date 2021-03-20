const express = require("express");

const api = express();
const port = 3000;

api.get("/", (req, res) => {
  res.send("Hello World!");
});

api.listen(port, () => {
  console.log("Backend is running on port", port);
});
