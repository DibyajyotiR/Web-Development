//Student model imported here only
const Student = require('../models/student');    //here Student is a model

//methods are handle here 
//data created here only

//createStudent is a method,which is handle the data
exports.createStudent=(req,res)=>{
    const student=new Student(req.body)
    student.save()
           .then(()=>res.status(201).json({message:'Student Created successfully', content:student}))
           .catch((err)=>res.status(400).json({error:err.message}))
}
exports.getStudents=async(req,res)=>{
    const student=await Student.find()
    res.json(student)  //api re data send pain json method use kruchu
}
