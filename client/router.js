const router = require("express").router();
const UserController = require("./index.js");
const userController = new UserController(require("./userModel.js"));

router.get("/user/:id", userController.getUser);

module.exports = router;
