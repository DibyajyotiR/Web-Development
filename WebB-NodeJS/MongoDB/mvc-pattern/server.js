const express=require("express")
const mongoose = require('mongoose');
const router = require("./routes/studentRoutes");
require('dotenv').config()
const allRoutes=require('./routes/allRoutes')

const app=express()
mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log("DB Connected"); 
}).catch((err)=>{
    console.log(err);
})


//using routes create API
// const studentRoutes=require('./routes/studentRoutes')
// app.use("/",studentRoutes)

app.use(express.json())
app.use('/api',allRoutes)     // /api/students/getStudent


app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
    
})

