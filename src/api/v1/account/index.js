const account = require("express").Router();

account.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = account;
