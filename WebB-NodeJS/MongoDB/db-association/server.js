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

//2ta model ra id ku au gote model re store hava-junction type
const subjectSchema=new mongoose.Schema({
    title:String
},{timestamps:true}
)
const Subject=mongoose.model("Subject",subjectSchema)

const learnerSchema=new mongoose.Schema({
    name:String
},{timestamps:true}
)
const Learner=mongoose.model("Learner",learnerSchema)

const enrollmentSchema=new mongoose.Schema({
    learner:{type:mongoose.Schema.Types.ObjectId,ref:"Learner"},
    subject:{type:mongoose.Schema.Types.ObjectId,ref:"Subject"},
    enrolledAt:{type:Date,default:Date.now()},
    status:{type:String,enum:["active","complete","dropped"]}
},{timestamps:true}
)
const Enrollment=mongoose.model("Enrollment",enrollmentSchema)

// Subject.create({
//     title:"NoseJS"
// }).then((res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e); 


// Learner.create({
//     name:"Adams",
// }).then((res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e); 
// })


//junction =adding two model in one model to get all details
// Enrollment.create({
//     learner:"6989ed6bd7f3d59065975391",
//     subject:"6989ec293bbfd7fd01530b1c",
//     status:"active"
// }).then((res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e); 
// })

//fetching data

Enrollment.find({learner:"6989ed6bd7f3d59065975391"})
    .populate("learner","name")
    .populate("subject","title")
    .then((res)=>(console.log(res)))
    .catch((e)=>(console.log(e)))


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})