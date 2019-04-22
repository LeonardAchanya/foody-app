const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const User = require("../models/users");
const Category = require("../models/category");

class Recipe extends Sequelize.Model{}
Recipe.init({
    title:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    ingredients:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    steps:{
        type: Sequelize.STRING,
        allowNull: false 
    },
    images:{
        type: Sequelize.STRING,
        allowNull: true
    }
}, {sequelize});

User.hasMany(Recipe);
Category.hasMany(Recipe);

module.exports = Recipe;