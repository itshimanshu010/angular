const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());


//for testing of get request
app.get('/',function(req,res){
    //request and response
    res.send('Hello from server');  
})

//creating end point which our angular app will post the form data
app.post('/enroll',function(req,res){
    console.log(req.body);
    //request body contains user data that was submitted by app

    //then we send a response
    res.status(401).send({"message":"Data Recieved"});
})

//we listen to request on specify port
app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
});
