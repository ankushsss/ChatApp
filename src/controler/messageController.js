const MessageModel = require("../models/messagesModel")


const addMessage = async(req,res)=>{
    try{
        console.log(req.body)
       
          let message = new MessageModel(req.body)
          let isSave = await message.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"message Added successfully",
                status:200,
                isSave
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

const getMessage = async(req,res)=>{
    try{
        console.log(req.body)
       
          let message = await MessageModel.find({})

          if(message)
          {
           return res.status(200).json({
                mssg:"message get successfully",
                status:200,
                message
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




module.exports = {addMessage,getMessage}