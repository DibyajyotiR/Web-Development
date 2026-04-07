const express = require("express")
const aiRoutes=require("./routes/ai.routes")
//jese hi hum express ko call krte h ek server create hota h
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/ai',aiRoutes)

module.exports=app