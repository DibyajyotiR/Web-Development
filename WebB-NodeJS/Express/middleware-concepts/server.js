const express =require ("express")
const cors =require("cors")
const morgan = require("morgan")

//!Express app
const app=express()
const PORT=3000

//=====================
//1.Built-In Middleware
//=====================
app.use(express.json())//Parse Json
app.use(express.static("public"))

//========================
//2.Third-party Middleware
//========================
app.use(morgan("dev"))  //Log HTTP Request
app.use(cors())   //Allows cross-origin request

//=================
//3.Custom Middleware
//=================

// app.use((req,res,next)=>{
//     console.log(`Custom Logger : ${req.method}-${req.url}`);
//     req.requestTime=new Data()
//     next()
// })

//===============================
//4.Application-Level Middleware
//===============================
app.get("/admin",(req,res,next)=>{
    console.log("Checking admin access...");
    //you could authentication
    next()
    },
    (req,res)=>{
        res.json({message:"Welcome to Admin Panel!"})
    }
)

//=========================
//5.Router-Level Middleware
//=========================
const userRouter=express.Router()
userRouter.use((req,res,next)=>{
    console.log('User router middleware called');
    next()
})
userRouter.get("/profile",(req,res)=>{
    res.json({message:"User Profile"})
})

//----------------------------------------------------------------------------
app.get("/",(req,res)=>{
    res.json({message:"Welcome to Home Page"})
})
app.get("/about",(req,res)=>{
    console.log(req.requestTime)
    res.json({message:"Welcome to About Page"})
})

app.use("/",userRouter)

//!Start the Server
app.listen(PORT,console.log(`Server is up and Running http://localhost:${PORT}`))