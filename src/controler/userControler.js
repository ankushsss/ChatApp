const UserModel = require("../models/userModel")

const addUser = async(req,res)=>{
    try{
        console.log(req.body)
        let email = req.body.email.toLowerCase()
        console.log(req.body.email.includes("@"))
        console.log(req.body.mobileNumber.length == 10)

        if(req.body.email.includes("@"))
        {
          let user = new UserModel(req.body)
          let isSave = await user.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"user add successfully",
                status:200,
                isSave
            })
          }

          else{
            return res.status(400).json({
                mssg:"something is wrong ",
                status:400,

            })
          }
        }
        else{
            return res.status(400).json({
                mssg:"email is required"
            })

        }
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}

const getUser = async(req,res)=>{
    try{
         let users = await UserModel.find({})

         if(users.length != 0)
         {
            return res.status(200).json({
                mssg:"add Success",
                status:200,
                users
    
            })
         }

        
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}


module.exports = {addUser,getUser}