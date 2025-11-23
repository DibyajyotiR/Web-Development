const express = require('express')
//!Express App
const app=express()
const PORT=3000
//Middleware (global)
//use() is a inbuilt method to use middleware-whenever http call like put get post delete then any req from user then it will handled by middleware
//next()-to handle next req from user we wil use next method
app.use((req,res,next)=>{
    console.log("Middleware is called");
    next()
})
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})

//!Start the server
app.listen(PORT,console.log("Srver is up and running"))

