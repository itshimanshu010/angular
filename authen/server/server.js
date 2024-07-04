//requring express and body-parser
const express = require('express')
const bodyParser = require('body-parser')

//port number where express server will run on
const  PORT = 3000

const api = require('./routes/api')

//we create instance of express
const app = express()

//we use body-parser to handle json data
app.use(bodyParser.json())

app.use('/api',api)

//get request to the server
app.get('/',function(req,res){
    res.send('Hello From Server')
})

//we listen to request on the port
app.listen(PORT,function(){
    console.log('Server is running on localhost:'+PORT);
})