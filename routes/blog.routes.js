const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogs.controller");

router.get("/", blogController.getHome);
router.get("/blogs", blogController.getBlogs);
router.get("/blogpost/:slug", blogController.getBlogPost);

module.exports = router;
