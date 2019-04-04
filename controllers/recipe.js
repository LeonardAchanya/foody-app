const Recipe = require("../models/recipe");
const User = require("../models/user");
const Category = require("../models/category")

exports.getRecipe = (req, res, next) =>{
    Recipe.findAll()
    .then(recipe =>{
            res.json(recipe)
    })
    .catch(err => res.json({ success: fail}))
};

exports.postRecipe = (req, res, next) =>{
    const {title, ingredient, description, UserId, CategoryId}= req.body;

    Recipe.create({
        title,ingredient, description, UserId, CategoryId 
    })
    .then(recipe =>{
            res.json(recipe)
    })
    .catch(err => res.json({  message: "Failed", error: err }))
};

exports.deleteRecipe = (req, res, next) => {
    const jobId = req.params.id;
    Recipe.findByPk(jobId)
    .then(job =>{
        job.destroy()
        .then(() => {
            res.json({success : true })
        })
        .catch(err => ({success: false}))
    })
    .catch(err => ({message: "Does not exist", error:err}))
   
}
exports.getUser = (req, res, next) =>{
    User.findAll()
    .then(user =>{
            res.json(user)
    })
    .catch(err => res.json({ success: fail}))
};
exports.postUser = (req, res, next) =>{
    const {name}= req.body;

    User.create({
       name
    })
    .then(user =>{
            res.json(user)
    })
    .catch(err => res.json({  message: "Failed", error: err }))
};
exports.postUser = (req, res, next) =>{
    const {title}= req.body;

   Category.create({
       title
    })
    .then(user =>{
            res.json(user)
    })
    .catch(err => res.json({  message: "Failed", error: err }))
};