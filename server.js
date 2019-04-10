require("dotenv").config(); 
const express = require("express");
const cors = require("cors");
// const bodyParser= require('body-parser')
// const multer = require('multer');
const sequelize = require("./config/database");
const routeRecipes =require("./routes/recipe");
// const upload = multer({ dest: 'uploads/' })


const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
// This allows domain to access api 
app.use(cors());

//configuring Multer to use files directory for storing files
// const storage = multer.diskStorage({
//   destination: './files',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`)
//   },
// });

// const upload = multer({ storage });

// // express route where we receive files from the client
// app.post('/files', upload.single('file'), (req, res) => {
//  const file = req.file; // file passed from client
//  const meta = req.body; 

// });

// This allows us a cess the content of json request
app.use(express.json());
app.use("/recipe", routeRecipes);

const PORT = process.env.PORT || 5000;

sequelize.sync()
    .then(result => {
        // this creates a http server and listens for incoming requests
        app.listen(PORT, () => console.log("Started on Port " + PORT));
    })
    .catch(err => console.log(err));
