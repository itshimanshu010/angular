//Here we defines all our API endpoints

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = 'mongodb+srv://himanshu:LD6HZPHsEY6HvaRA@cluster0.ffnurx2.mongodb.net/eventdb?retryWrites=true&w=majority&appName=Cluster0'
//handle the get request

mongoose.connect(db)
.then(() => console.log("MongoDB is connected successfully"))
.catch((err) => console.log("Error: ", err));


router.get('/',(req,res) => {
    res.send('From API route')
})

router.post('/register',(req,res)=>{
    let userData = req.
})

module.exports = router;