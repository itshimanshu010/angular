//Here we defines all our API endpoints

const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User=require('../models/user')


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


//api saved the data in mongodb database using mongoose

//
//now we create a api to register the new user
//here new method to handle the request
//as a call back we get access to request and response            
router.post('/register',async(req,res)=>{
   try {
    
     //first we extract the user information from the request body
     let userData=req.body;
     //this userData has to be cast into the the user model
     //that moongose can understand,so now we import user model from user.js
     //now we create the instance of the user model
     let user=new User(userData);
     //now we save the user data into the database
     //callback give either error or registered user
     const data=await user.save()
     return res.status(200).json(
        {
            data:data,
            status:true
        }
     )
   } catch (error) {
    console.log(error)
    return res.status(500).json(
        {
            message:error.message,
            status:false
        }
     )
    
   }
    
})

router.post('/login', async (req, res) => {
  try {
    let userData = req.body;

    // Find the user by email
    let user = await User.findOne({ email: userData.email });

    if (!user) {
      return res.status(401).send('Invalid Email');
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(userData.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send('Invalid Password');
    }

    // Send the user details on successful login
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;