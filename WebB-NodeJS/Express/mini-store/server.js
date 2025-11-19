const express = require('express');
const app=express()

//home
app.get('/',(req,res)=>{
    res.send("welcome to our store")
})

//product
app.get('/product',(req,res)=>{
    res.send("this is product page")
})

//about us
app.get('/about',(req,res)=>{
    res.send("this is about us page")
})

//contact us
app.get('/contact',(req,res)=>{
    res.send("this is contact us page")
})
//categories
///categories?color=red&price=40000
app.get('/categories',(req,res)=>{
    res.send("this is categories page")
    console.log(req.query);
    
})

//Route parameters
app.get("/product/:id",(req,res)=>{
    console.log(req.params.id);
    res.send(`you requested product with ID = ${req.params.id}`)
    
})

app.listen(8000,()=>{
    console.log(`Server running on http://localhost:${8000}`);
    
})