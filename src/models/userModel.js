const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
})
 
const UserModel =  mongoose.model("users",UserSchema)


module.exports = UserModel