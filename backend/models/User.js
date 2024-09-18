const mongoose = require('mongoose')
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    newpassword:{
        type : String
    }
})

module.exports = model('NewUser',UserSchema)