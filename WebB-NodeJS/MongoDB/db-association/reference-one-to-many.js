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
const productSchema=new mongoose.Schema({
    pName:String,
    description:String,
    price:Number,
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
//reference-one-to-many
const Product=mongoose.model("Product",productSchema)

const sellerSchema=new mongoose.Schema({
    name:String,
    email:String,
})
const User=mongoose.model("User",sellerSchema)
// User.create({
//     name:"Allen",
//     email:"allen@gmail.com",
// }).then((res)=>{
//     console.log("product created"); 
// }).catch((err)=>{
//     console.log("failed to create product");
// })

// Product.create({
//     pName:"tablet",
//     description:"...",
//     price:60999,
//     seller:'6988211bbb9722f149c3d347'
// }).then((res)=>{
//     console.log("product created"); 
// }).catch((err)=>{
//     console.log("failed to create product");
// })

// User.find().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("failed to create product");  
// })

Product.find()
     .populate('seller')   //keyname 
     .then((res)=>{
        console.log(res);
     }).catch((err)=>{
        console.log(err);   
     })


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})