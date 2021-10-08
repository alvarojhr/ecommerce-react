const express = require("express");
const router = express.Router();

const CategoriaController = require("../controllers/categoria");

router.post("", CategoriaController.CreateCategoria);

module.exports = router;
