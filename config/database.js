const Sequelize = require("sequelize");

const sequelize = new Sequelize("recipes", "root",  process.env.MYSQL_PASSWORD, {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize;