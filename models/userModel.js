const mongoose  = require('mongoose')
// create schema 
const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required :true
    },
    email :{
        type : String,
        required : true 
    },
    password :{
        type : String,
        required : true 
    },
    nickName :{
        type : String,
    },
    phoneNum :{
        type : String, 
    },
    profilePic :{
        type : String, 
    },
    role:{
        type : String,
        required : true,
        default:"user"
    }
})

const users = mongoose.model("users",userSchema)
module.exports = users