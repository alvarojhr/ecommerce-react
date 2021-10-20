const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");
const auth = require("../middleware/auth");

router.get("", auth, UserController.GetUser);
router.get("/validarAdmin", auth, UserController.ValidarAdmin);

module.exports = router;
