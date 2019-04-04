const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const User = require("../models/user");
const Category = require("../models/category");

class Recipe extends Sequelize.Model{}
Recipe.init({
    title:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    ingredient:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false 
    }
    
}, {sequelize});

User.hasMany(Recipe);
Category.hasMany(Recipe);

module.exports = Recipe;