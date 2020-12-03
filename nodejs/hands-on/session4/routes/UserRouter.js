const express = require("express");
const router = express.Router();
/* 
path :  /user
*/
router.get("/", (req, res) => {
  res.send("User List");
});
router.get("/add", (req, res) => {
  res.send("User Add");
});
module.exports = router;