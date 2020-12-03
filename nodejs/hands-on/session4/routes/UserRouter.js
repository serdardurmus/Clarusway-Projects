const express = require("express");
const router = express.Router();
const data = require("../models/data");
/* 
path :  /user
*/
router.get("/", (req, res) => {
  res.render("user", { users: data.userList, id: "" });
});
router.get("/:id", (req, res) => {
  res.render("user", { users: data.userList, id: req.params.id });
});
module.exports = router;