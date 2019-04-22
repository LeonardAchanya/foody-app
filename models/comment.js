const Sequelize = require("sequelize");
const sequelize = require("../config/database");


class Comment extends Sequelize.Model{}
    Comment.init({
        comment:{
            type: Sequelize.STRING,
            allowNull: false
            }
            },{sequelize})

module.exports = Comment
