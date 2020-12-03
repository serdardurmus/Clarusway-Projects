// middleware

const express = require("express");
const path = require("path");
const MainRouter = require("./routes/MainRouter");
const UserRouter = require("./routes/UserRouter");

const port = process.env.port || 5000;  // processteki neyse onu alır, onu almalı, yoksa 5000i alır
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", MainRouter);
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});