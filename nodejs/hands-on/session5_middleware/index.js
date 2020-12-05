const express = require("express");
require("dotenv").config();
const logger = require("morgan");
const port = process.env.port || 5001;
const host = "localhost";
const app = express();
//middleware
app.use(logger("dev"));
app.get("/user", (req, res) => {
  res.send("User details");
});
app.listen(port, host, () => {
  console.log("I'm listening on http://%s:%s", host, port);
});