const express = require("express");
const router = express.Router();
const recipeController = require("../../controllers/recipe");
const upload = require("../../middlewares/upload");

router.get("/get", recipeController.getRecipe);
router.get("/:id", recipeController.getRecipeById);
router.post("/add",  upload.single("image"), recipeController.postRecipe);
router.delete("/:id", recipeController.deleteRecipe);
router.get("/user", recipeController.getUser);
router.post("/user", recipeController.postUser);
router.post("/category", recipeController.postUser);



//  router.post("/", upload.single("image"), recipeController.postRecipe);





module.exports = router;