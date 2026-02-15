const express= require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()
const cors=require('cors')
const allRoutes=require('./routes/allRoutes')


mongoose.connect(process.env.MOGODB_URL)
.then((res)=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);  
})

app.use(express.json())
app.use(cors())
app.use('/api',allRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})