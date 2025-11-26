const express=require("express")
const path = require('path');
const { title } = require("process");
const app=express()
const PORT=5000

//Set EJS as the view engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.render("index.ejs",{
        title:"Home Page",
    })
})
app.get("/about",(req,res)=>{
    res.render("about.ejs",{
        title:"About Page ",
    })
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})
app.get("/variable",(req,res)=>{
    res.render("variables",{
        title:"EJS Variables",
        user:{
            name:"ABCD",
            age:25,
            email:"abcd@gmail.com",
            isActive:true,
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})
