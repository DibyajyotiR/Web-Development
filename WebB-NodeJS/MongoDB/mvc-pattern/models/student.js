//schema and model created here
//data stucture created here only
const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    rollNo:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
})
// const Student=mongoose.model('Student',studentSchema)
//module.exports=Student
module.exports=mongoose.model('Student',studentSchema)