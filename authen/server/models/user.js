//require moongose
const mongoose = require('mongoose');

//instance of mongoose schema
const Schema = mongoose.Schema

//create new schema for user data in moongodb

const userScehmma = new Schema({
    email:String,
    password:String
})

//create the model from schema and export it
module.exports = mongoose.model('user', userScehmma,'users');
                                //model name, schema name, collection name
//now we have mooongose model to create read update and delete the data from mongodb


//now we have to only connect the database that has been create
 //all api request will be managed in the api route file