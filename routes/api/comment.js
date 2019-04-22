const express = require("express");
const commentController = require("../../controllers/comments");

const router = express.Router();

router.post("/add", commentController.addComment);
router.get("/all", commentController.getAllComments);
router.delete("/:id", commentController.deleteComment);

module.exports = router;