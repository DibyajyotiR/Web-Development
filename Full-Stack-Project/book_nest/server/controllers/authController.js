const User=require("../models/user")
const bcrypt=require("bcryptjs")
//bcrypt password ku encrypt kare
const jwt=require("jsonwebtoken")
const { findOne } = require("../models/cart")
//token create hue

//!REGISTER USER

//login re get method 
//register re post method
exports.registerUser=async (req,res)=>{
    try{
        const{name,email,password}=req.body 
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    const useExists = await User.findOne({email})
    if(useExists){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }
    const  hashedPassword=await bcrypt.hash(password,10)

    //10 =salt amount
    const user =await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({
        success:true,
        message:"User registered successfully",
        data:user
    })
} catch (error){
    res.status(500).json({
        success:false,
        message:"Registration failed",
        error:error.message
    })
 }
}
//!Login User
exports.loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Email and Password Required"
            })
        }
        const user =await findOne({email})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not Found"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid Credential"
            })
        }
        const token =jwt.sign(
            { id:user._id,
              role:user.role
            },
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        res.status(200).json({
            success:true,
            message:"Login Successful",
            token,
            user
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Login failed",
            error:error.message
        })
    }
}