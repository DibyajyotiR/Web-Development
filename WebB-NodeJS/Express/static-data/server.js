const express = require('express');
const PORT=3000
const app=express()

//to use content of public folder we will use middleware
//index.html file is the root file of any website
app.use(express.static("public"))

app.listen(PORT,()=>{
    console.log(`Serveris running on http://localhost:${PORT}`);
    
})