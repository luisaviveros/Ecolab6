const express = require("express");
const { getPostsByTitleLike } = require("../controllers/posts.controller");

const router = express.Router();

// para buscar por titulo
router.get("/searchTitle", getPostsByTitleLike);

module.exports = router;
