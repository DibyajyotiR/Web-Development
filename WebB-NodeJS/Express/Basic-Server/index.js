//import express
const express = require('express');

//initialize express
const app=express()
//bydefault method is get

//define route
//we have to pass two arguments,1st is path,2nd is handler (maybe it is arrow func,callback func,anonymous func,normal func)      
//bydefault home page route
app.get('/',(req,res)=>{
    res.send("Hello,this is my express server")
})
//about route
app.get('/about',(req,res)=>{
    res.send("About us page")
})
//if we want to fetch data from client side /server side we will use GET method
//for creating data will use POST method
//for editing PUT method 
//METHODS
//GET -get data
//POST -send data
//PUT/PATCH -update data
//DELETE -delete

//contact route
app.get('/contact',(req,res)=>{
    res.send('contact us page')
})
//signup route
app.post('/register',(req,res)=>{
    res.send("Register route ")
})

app.get('/register',(req,res)=>{
    res.send("Register route ")
})
app.get('/contact',(req,res)=>{
    res.send("Contact route ")
})
app.listen(5000,()=>{
    console.log(`Server running on http://localhost:${5000}`);
    
})