const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const connectDB= require('./config/db')


const PORT= process.env.PORT || 5000
const app=express()
connectDB()

//MIDDLEWARE
//Application-Level Middleware
app.use(cors())
//Built-in Middleware
app.use(express.json())

//!ROUTES
//Application-Level Middleware
app.use("/api",allRoutes)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})