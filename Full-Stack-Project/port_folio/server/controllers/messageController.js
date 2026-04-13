const messageModel = require("../models/messageModel")

exports.sendMessage=(async(req,res)=>{
    const { name, email, message } = req.body;
    if(!name || !email || !message){
        return res.status(400).json({
        success: false,
      });
    }
    try{

        const newMessage = new messageModel({ name, email, message });
        await newMessage.save()
        res.json({success:true,message:"Data Recieved"})
    }catch(err){
        res.status(500).json({success:false,error:err.message})
    }
})

exports.getMessage = async (req, res) => {
    try {
        const messages = await messageModel.find();
  
        res.json({
            success: true,
            data: messages
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};