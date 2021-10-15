const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");
const auth = require("../middleware/auth");

router.get("", auth, ProductController.getProducts);
router.post("", ProductController.addProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/entire/:id", ProductController.getProductIdLazyLoading);
router.get("/:id", ProductController.getProductId);
router.put("/:id", ProductController.editProduct);

module.exports = router;
