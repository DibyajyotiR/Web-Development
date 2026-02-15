const { equal } = require("assert");
const express=require("express")
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const { title } = require("process");
const app=express()
const PORT=5000

//Set EJS as the view engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

//Use express ejs layouts
//1st layout is a variable.... 2nd layout is a file
app.use(expressLayouts)
app.set("layout","layout")

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
app.get("/conditionals",(req,res)=>{
    res.render("conditionals",{
        title:"EJS Conditionals",
        user:{
            isLoggedIn:true,
            isAdmin:true,
            hasItem:true,
        }
    })
})
app.get("/loop",(req,res)=>{
    res.render("loop",{
        title:"EJS Loop",
        fruits:["apple","mango","banana","grapes"],
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})
