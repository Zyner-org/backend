const v1 = require("express").Router();
const account = require("./account");

v1.use("/account", account);

module.exports = v1;
