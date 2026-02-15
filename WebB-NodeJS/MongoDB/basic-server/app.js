const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()

const PORT = 3500
const URI = process.env.MONGO_URI
// console.log(URI);

const studentSchema= new mongoose.Schema({
    name : String,
    age : Number,
    course : String,
    section : String,
    mark : Number
})
const Student = mongoose.model('Student',studentSchema)

const s1= new Student({
    name : 'gyana',
    age : 24,
    course :'MCA',
    section : 'A',
    mark: 425
})
// s1.save()
Student.create({
    name : "Anshu",
    age : 24,
    course :'B.tech',
    section : 'A',
    mark: 95
})
app.get('/',(req,res)=>{
    res.send("Hello,this is MongoDB Database")
})
app.get('/register',(req,res)=>{
    res.send("register route")
})
app.post('/register',(req,res)=>{
    res.send("register route")
})

//!Find all data
Student.find()
  .then((res)=>{
    console.log(res); 
  }).catch((err)=>{
    console.log(err);
  })

//!Find one data
Student.findOne({age :21})
 .then((res)=>{
    console.log(res);
    console.log('found data');
    
 }).catch((err)=>{
    console.log(err);
 })

//!find by id 
Student.findOne({_id :"697f016fd1b798aaff1036d9"})
 .then((res)=>{
    console.log(res);
    console.log('found data by id');
    
 }).catch((err)=>{
    console.log(err);
 })

//!update
Student.updateOne({_id :"697f016fd1b798aaff1036d9"},{section:"B"})
.then((res)=>{
    console.log(res);  
}).catch((err)=>{
    console.log(err);
    
})

//!delete
// Student.deleteOne({_id :"697f016fd1b798aaff1036d9"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })  


mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log("Server Connected");
}).catch((err)=>{
    console.log(err);

})





app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})