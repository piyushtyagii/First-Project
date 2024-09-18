const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/netflix'

const mongodb = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected to mongodb successfully")
    })

}

module.exports = mongodb;
