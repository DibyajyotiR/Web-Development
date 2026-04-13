const express=require("express")
const router=express.Router()
const messageRoutes=require("../routes/messageRoutes")

router.use("/messages",messageRoutes)

module.exports=router