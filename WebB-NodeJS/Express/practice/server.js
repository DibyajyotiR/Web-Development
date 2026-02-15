const express = require("express")
const app = express()
const PORT = 5000

app.use(express.json())
const students =[
    {id:1,name:"sushant sharma" ,age:17,course:"math"},
    {id:2,name:"ansh kulkarni" ,age:18,course:"science"},
    {id:3,name:"adah sharma" ,age:17,course:"english"}
]
//get all student data
app.get("/students",(req,res)=>{
    res.json(students)
})
//get student data by id
app.get("/students/:id",(req,res)=>{
    const studentId=Number(req.params.id)
    const studentdata=students.find((student)=>{
        return student.id === studentId
    })
    if(!studentdata){
        return res.json({message: "Student not found"})
    }
    res.json(studentdata)
})
//add new student data
app.post("/students",(req,res)=>{
    const newStudent=req.body;
    newStudent.id=students.lenght+1;
    students.push(newStudent)
    res.json({message : newStudent,allStudents:students})
})
//update data by id
app.put("/students/:id",(req,res)=>{
    const newStudent =Number(req.params.id)
    const update =students.findIndex((student)=>{
        return student.id === newStudent
    })
    if(update === -1){
        res.json({message:"not found"})
    }
    const updatestudentData ={...students[update],...req.body}
    students[update]=updatestudentData
    res.json({message:"student data updated",data:updatestudentData})
})
app.delete("/students/:id",(req,res)=>{
    const studentId=req.params.id ;
    res.send(`Student with ID : ${studentId} Deleted`)
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})