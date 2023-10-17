const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")

const addUser = async(req,res)=>{
    try{
        bcrypt.hash(req.body.password,10,async(err, hashPassword)=>{
            let user = new UserModel({...req.body,password:hashPassword})
            let isSave = await user.save()
  
            if(isSave)
            {
             return res.status(200).json({
                  mssg:"user add successfully",
                  status:200,
                  isSave
              })
            }
          })
         
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

const login = async(req,res)=>{
    try
    {
        let {email,password} = req.body
        let users = await UserModel.find({email:email})
        console.log(users)
        if(users.length == 0)
        {
            return res.status(400).json({
                status:400,
                mssg:"user not found"
            })
        }
        else{
             bcrypt.compare(req.body.password,users[0].password,(err,result)=>{

                if(result == true)
                {
                    return res.status(200).json({
                        status:200,
                        mssg:"user login success"
                    }) 
                }
                else
                {
                    return res.status(400).json({
                        status:400,
                        mssg:"incorrect email and password"
                    }) 
                }
             })
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            status:500,
            message:"server error",
            err:JSON.stringify(err)
        })
    }
}


module.exports = {addUser,getUser,login}