// middleware neden kullanılır?

const express = require("express");
require("dotenv").config();
const port = process.env.port || 5001;
const host = "localhost";
const app = express();
//middleware
app.use((req, res, next) => {
  console.log("session expiry check");
  // some jobs
  next();
});
app.use((req, res, next) => {
  console.log("user auth");
  next();
});
app.use((req, res, next) => {
    console.log("cookies");
    next();
  });
app.use((req, res, next) => {
  console.log("cookies");
  if (true) {
    res.send("OK");
  }
});
app.get("/user", (req, res) => {});
app.listen(port, host, () => {
  console.log("I'm listening on http://%s:%s", host, port);
});