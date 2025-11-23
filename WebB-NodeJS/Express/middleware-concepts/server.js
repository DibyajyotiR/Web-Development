const express=require("express")
const app=express()
const PORT =5000

//Normal Middleware(Global)
app.use((req,res,next)=>{
    //     obj       classname
    const error= new Error("Oops!Something went wrong")
    next(error)
})
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})
//Error-handling middleware
app.use((err,req,res,next)=>{
    console.log("Error",err.message);
    res.send('Something broke !')
})

app.listen(PORT,()=>{
    console.log(`Server is running here http://localhost:${PORT}`);
    
})