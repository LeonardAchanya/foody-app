const Recipe = require("../models/recipe");
const User = require("../models/users");
const Category = require("../models/category")

exports.getRecipe = (req, res, next) => {
    Recipe.findAll()
        .then(recipe => {
            res.json(recipe)
                })
                    .catch(err => res.json({ msg: "failed to get recipe" }))
                                                                };

exports.postRecipe = (req, res, next) => {
    //getting the fields from the model
    const { title, ingredients, steps, UserId, CategoryId } = req.body;
    // const UserId = req.body;
        let images = null;
	        if(req.file) {
                images = req.file.path
                      }
                    //find the userId and create the recipe for the user
                    // User.findByPk(UserId)
                    //     .then(user =>{
                            //if the fields are empty send an error message
                            if( !title || !ingredients || !steps ){
                                res.status(400).json({msg: "All feilds are required"})
                                    } 
                                    //else create recipe
                                    else{ 
                                        Recipe.create({
                                            title, ingredients, steps, images, UserId, CategoryId
                                                })
                                                .then(recipe => {
                                                    res.json(recipe)
                                                    })
                                                    
                                                    .catch(err => res.json({ message: "Failed", error: err }))
                                                    //  }
                                                    };
                                                    // })
                                                }


exports.deleteRecipe = (req, res, next) => {
    const recipeId = req.params.id;
        Recipe.findByPk(recipeId)
            .then(recipe => {
                recipe.destroy()
                    .then(() => {
                        res.json({ success: true })
                            })
                            .catch(err => ({ success: false }))
                             })
                            .catch(err => ({ message: "Does not exist", error: err }))
                            }

exports.getRecipeById = (req, res) => {
    const recipeId = req.params.id;
            Recipe.findOne({
                WHERE: {
                    id: recipeId
                },
                include: [
                    {
                        all: true,
                        attributes: { exclude: [ "createdAt", "updatedAt"] }
                    }]})
                .then(recipe => {
                    if(!recipe){
                        res.status(404).json({msg : "recipe not found"})}
                        else{
                            res.json(recipe)
                        }
                        })                       
                        }

exports.getUser = (req, res, next) => {
    User.findAll()
        .then(user => {
            res.json(user)
        })
        .catch(err => res.json({ success: fail }))
};
exports.postUser = (req, res, next) => {
    const { name } = req.body;

    User.create({
        name
    })
        .then(user => {
            res.json(user)
        })
        .catch(err => res.json({ message: "Failed", error: err }))
};
exports.postUser = (req, res, next) => {
    const { title } = req.body;

    Category.create({
        title
    })
        .then(user => {
            res.json(user)
        })
        .catch(err => res.json({ message: "Failed", error: err }))
};