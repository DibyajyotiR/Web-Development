const express=require('express')
const app=express()
const MONGO_URL= "mongodb+srv://dibyajyotirout:dEKSahkmATUiayba@server1.n5ehn4n.mongodb.net/db-association?appName=Server1"
const PORT =3500
const mongoose =require('mongoose')

mongoose.connect(MONGO_URL)
.then((res)=>{
    console.log("DB Connected");   
}).catch((err)=>{
    console.log("Connection failed");
})
const BrandSchema=new mongoose.Schema({
    brandName:String,
    established:Number,
    location:String
})

const MobileSchema=new mongoose.Schema({
    model:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true,
        min:10000,
        max:200000
    },
    description:{
        type:String,
    },
    ram:{
        type:String,
        enum:['6GB','8GB','12GB'],
        required:true
    },
    brand:BrandSchema
},{
    timestamps:true
})
//one to one connection
const Mobile = mongoose.model('Mobile',MobileSchema)
// Mobile.create({
//     model:"Samsung S25",
//     price:129999,
//     ram:"12GB",
//     brand:{
//         brandName:"Samsung",
//         established:1969,
//         location:"South Korea"
//     }
// }).then((res)=>{
//     console.log('Mobile Created');
// }).catch((err)=>{
//     console.log(err.message);
// })




app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})