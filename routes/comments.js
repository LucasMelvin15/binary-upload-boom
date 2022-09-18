const express = require("express");
const router = express.Router();


//add comments controller
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



// add post comment route
router.post("/createComment/:id", commentsController.createComment);

module.exports = router;