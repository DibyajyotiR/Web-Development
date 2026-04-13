const {sendMessage,getMessage}=require("../controllers/messageController")
const express=require("express")
const router=express.Router()

router.use('/send',sendMessage)
router.use('/get',getMessage)


module.exports=router