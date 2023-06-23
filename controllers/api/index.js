// Imports 
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogPostRoutes = require("./blogPostRoutes");
const commentRoutes = require("./commentRoutes");

// Middleware
router.use("/users", userRoutes);
router.use("/blogposts", blogPostRoutes);
router.use("/comments", commentRoutes);

// Exports
module.exports = router;
