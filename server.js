require("dotenv").config(); 
const express = require("express");
const cors = require("cors"); 
const sequelize = require("./config/database");
const routeRecipes =require("./routes/recipe");


const app = express();

// This allows domain to access api 
app.use(cors());

// This allows us a cess the content of json request
app.use(express.json());
app.use("/recipe/add", routeRecipes)

const PORT = process.env.PORT || 5000;

sequelize.sync()
    .then(result => {
        // this creates a http server and listens for incoming requests
        app.listen(PORT, () => console.log("Started on Port " + PORT));
    })
    .catch(err => console.log(err));
