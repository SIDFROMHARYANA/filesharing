
require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() 
{
    //Database connection
    mongoose.connect("mongodb+srv://sid:jaiguruji@cluster0.dbzpsfq.mongodb.net/fileshareindb?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then( () => console.log("MongoDb is connected."))
    .catch ( err => console.log(err) )


}


module.exports = connectDB;