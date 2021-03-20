const express = require("express");

const app = express();
const api = require("./api");

const port = 3000;
app.use("/api", api);
app.listen(port, () => {
  console.log("Backend is running on port", port);
});
