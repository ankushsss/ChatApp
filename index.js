let express = require("express")
let mongoose = require("mongoose")
let app = express()
app.use(express.json())
 

let port = 3000



mongoose.connect("mongodb+srv://abjushsaxena90:ankush123@cluster0.37q9k6c.mongodb.net/groupChatForUser?retryWrites=true&w=majority&appName=AtlasApp").then((res)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

let UserModel = require("./src/models/userModel")
let addUser = require("./src/controler/userControler")

app.post("/addUser",addUser)
// app.get("/addUser",getUser)





app.listen(port,(err)=>{
    if(err)
    {
        console.log("something is wrong")
    }

    console.log(`server is running on port ${port}`)
})