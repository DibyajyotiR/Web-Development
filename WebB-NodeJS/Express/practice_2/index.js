const express =require("express");
const app =express()
const PORT=3000

app.use(express.json())
const employees=[
    {id:1,name:"roshan",department:"electric",status:"active"},
    {id:2,name:"roshan",department:"electric",status:"active"},
    {id:3,name:"roshan",department:"electric",status:"active"}
]
app.get("/employee",(req,res)=>{
    res.json(employees)
})
app.get("/employee/:id",(req,res)=>{
    const employeeId=Number(req.params.id)
    const employeedata=employees.find((employee)=>{
        return employee.id === employeeId
    })
    if(!employeedata){
        return res.json({message: "Student not found"})
    }
    res.json(employeedata)
})
app.get("/salary",(req,res)=>{
    res.send("employee salary List ")
    console.log(req.query);
    
})
app.post("employee",(req,res)=>{
    const newEmployee=req.body;
    newEmployee.id=employees.length+1;
    employees.push(newEmployee)
    res.json({message : newEmployee,allEmployee : employees})
})
app.put("/employee/:id",(req,res)=>{
    const newEmployee = Number (req.params.id)
    const update = employees.findIndex((employee)=>{
        return employee.id === newEmployee
    })
    if(update === -1){
        res.json({message : "not found"})
    }
    const updateEmployeeData={...employees[update],...req.body}
    employees[update]=updateEmployeeData
    res.json({message : "updated data",data :updateEmployeeData})
})
app.delete("/employee/:id",(req,res)=>{
    const employeeId=req.params.id ;
    res.send(`Employee with ID : ${employeeId} Deleted`)
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})