const express = require("express");
const router = express.Router();
const recipeController = require("../../controllers/recipe");

router.get("/get", recipeController.getRecipe);
router.post("/add", recipeController.postRecipe);
router.delete("/:id", recipeController.deleteRecipe);
router.get("/user", recipeController.getUser);
router.post("/user", recipeController.postUser);
router.post("/category", recipeController.postUser);



module.exports = router;