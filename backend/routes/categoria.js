const express = require("express");
const router = express.Router();

const CategoriaController = require("../controllers/categoria");

router.post("", CategoriaController.CreateCategoria);
router.get("", CategoriaController.GetAll);

module.exports = router;
