const mongoose = require("mongoose")
require('dotenv').config()
//const mongoDBErrors = require("mongoose-mongodb-errors");
const uri = process.env.ATLAS_URI
//we want to use es6 promise not mongoose promises for this below line used for
//mongoose.Promise = global.Promise;
//mongoose.plugin(mongoDBErrors);

mongoose.connect(
    uri , 
    {
        useNewUrlParser : true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
     (err) =>{
    if(!err) 
    {
        console.log("DB connection successful...")
    }else 
    {
        console.log("Error in DB connection..." + JSON.stringify(err,undefined,2))
    }
});
