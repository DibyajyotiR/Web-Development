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
    price:Number
})
//one-to-many-embeded
const sellerSchema=new mongoose.Schema({
    name:String,
    email:String,
    product:[productSchema]
})
const Seller=mongoose.model("Seller",sellerSchema)
// Seller.create({
//     name:"Smith",
//     email:"smith@gmail.com",
//     product:[
//         {pName:"Mobile",description:"..",price: 49999},
//         {pName:"Laptop",description:"..",price: 69999},
//         {pName:"Fridge",description:"..",price: 39999},
//     ]
// }).then((res)=>{
//     console.log("product created"); 
// }).catch((err)=>{
//     console.log("failed to create product");
// })
Seller.find().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("failed to create product");  
})




app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})