const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class User extends Sequelize.Model {}

User.init({
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }

},{sequelize});

module.exports = User;