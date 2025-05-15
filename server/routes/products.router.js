const express = require("express");
const {
  getAllProducts,
  getProductsUnder50,
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/under50", getProductsUnder50);

module.exports = router;
