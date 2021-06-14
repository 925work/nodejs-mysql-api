const express = require("express");
const postsController = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postsController.save);

module.exports = router;
