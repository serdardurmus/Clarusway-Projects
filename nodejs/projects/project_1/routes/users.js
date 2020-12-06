var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

/*  /user */

router.get("/", usersController.get_users);

router.get("/add", usersController.show_add_user_form);
router.post("/add", usersController.add_user);

router.get("/:id/delete", usersController.delete_user);  // API endpoint deniyor
// router.get("/:id/edit", usersController.show_edit_user_form);  

module.exports = router;