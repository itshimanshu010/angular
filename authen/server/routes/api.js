//Here we defines all our API endpoints

const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//handle the get request

// Load environment variables from .env file
dotenv.config();
const db = process.env.DB;

mongoose.connect(db)
.then(() => console.log("MongoDB is connected successfully"))
.catch((err) => console.log("Error: ", err));


router.get('/',(req,res) => {
    res.send('From API route')
})

// router.post('/register',(req,res)=>{
//     let userData = req.
// })

module.exports = router;