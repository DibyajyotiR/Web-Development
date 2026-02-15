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
},{
    timestamps:true
})
const Brand=mongoose.model('Brand',BrandSchema)
// Brand.create({
//     brandName:"Apple",
//     established:1976,
//     location:"USA"
// })

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
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    }
},{
    timestamps:true
})
const Mobile = mongoose.model('Mobile',MobileSchema)
// Mobile.create({
//     model:"iphone 17 pro",
//     price:189999,
//     ram:"12GB",
//     brand:"6985fa6c1aad8f8adda3674d"
// }).then((res)=>{
//     console.log('Mobile Created');
// }).catch((err)=>{
//     console.log(err.message);
// })

Mobile.find().populate("brand")
.then((res)=>{
    console.log(res); 
}).catch((err)=>{
    console.log(err);
})

// Mobile.find().populate({path:"brand",select:"brandName"})
// .then((res)=>{
//     console.log(res); 
// }).catch((err)=>{
//     console.log(err);
// })

Mobile.find().populate({path:"brand",select:"-brandName"})
.then((res)=>{
    console.log(res); 
}).catch((err)=>{
    console.log(err);
})






app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})