const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");
const auth = require("../middleware/auth");

router.get("", ProductController.getProducts);
router.post("", auth, ProductController.addProduct);
router.delete("/:id", auth, ProductController.deleteProduct);
router.get("/disponibles", ProductController.getProductoDisponible);
router.get("/entire/:id", ProductController.getProductIdLazyLoading);
router.get("/:id", ProductController.getProductId);
router.get("/:name", ProductController.findProduct);
router.put("/:id", auth, ProductController.editProduct);

module.exports = router;
