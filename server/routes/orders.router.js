const express = require("express");
const { getOrdersSorted } = require("../controllers/orders.controller");

const router = express.Router();

router.get("/", getOrdersSorted);

module.exports = router;
