const express = require("express");
const {
  getAllProducts,
  getProductsUnder50,
  getProductsPriceMoreThan30Electronics,
  getProductsPaginated,
  getProductsByUser,
} = require("../controllers/products.controller");

const router = express.Router();

// Rutas para diferentes consultas de productos
router.get("/", getAllProducts); // Todos los productos
router.get("/under50", getProductsUnder50); // Productos con precio < 50
router.get("/priceMoreThan30Electronics", getProductsPriceMoreThan30Electronics); // Precio > 30 y categoría Electronics
router.get("/paginated", getProductsPaginated); // Paginación (primeros 10)
router.get("/byUser", getProductsByUser); // Productos por user_id (query param)

module.exports = router;
