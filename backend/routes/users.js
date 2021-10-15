const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");
const auth = require("../middleware/auth");

router.get("/:email", auth, UserController.GetUser);

module.exports = router;
