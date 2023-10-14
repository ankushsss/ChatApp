const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    },
    
})
 
const MessageModel =  mongoose.model("messages",MessageSchema)


module.exports = MessageModel