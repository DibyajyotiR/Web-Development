const express=require('express')
const app=express()
const MONGO_URL= "mongodb+srv://dibyajyotirout:dEKSahkmATUiayba@server1.n5ehn4n.mongodb.net/db-association?appName=Server1"
const PORT =3500
const mongoose =require('mongoose')
//many-to-many-reference
mongoose.connect(MONGO_URL)
.then((res)=>{
    console.log("DB Connected");   
}).catch((err)=>{
    console.log("Connection failed");
})
//Course Schema
const courseSchema=new mongoose.Schema(
    {
        title:String,
        student:[{type:mongoose.Schema.Types.ObjectId,ref:"Student"}]
    }, {timestamps:true}
)
const Course = mongoose.model("Course",courseSchema)
// Course.create({
//     title:"React native complete guide",
// }).then((course)=>console.log(course))
//   .catch((e)=>console.log(e))
//Student Schema
const studentSchema=new mongoose.Schema(
    {
       name:String,
       course:[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}]
    }, {timestamps:true}
)
const Student=mongoose.model("Student",studentSchema)
//create student and enroll(course) 
//"698982023ada3b056aa89133","6989824d818b701f8a1f01b8"
//"698981aa9cc397a611099c99","698981e1ee470b1762f2ef6e"
// Student.create({
//     name:"Marko kyle",
//     course:["698982023ada3b056aa89133","6989824d818b701f8a1f01b8"]
// }).then((studentwithcourse)=>console.log(studentwithcourse))
//   .catch((e)=>console.log(e))

// Student.find().populate("course",'title')
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//Get student and their enrolled course
// Student.findById("698983b13c63ff53bcd95236")
//      .populate("course",'title')
//      .then((course)=>console.log(course))
//      .catch((e)=>console.log(e))

//Update courses to reference the student
Course.updateMany(
    {_id:{$in:["698982023ada3b056aa89133","6989824d818b701f8a1f01b8"]}},
    {$push:{student:"698984107ef1d04736faefbf"}})
     .then((course)=>console.log(course))
     .catch((e)=>console.log(e)) 

//Get course and their enrolled students
Course.findById("698982023ada3b056aa89133")
     .populate("student",'name')
     .then((course)=>console.log(course))
     .catch((e)=>console.log(e))

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})