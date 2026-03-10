import React, { useState } from "react";
import images from "../assets/assets"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login =()=>{
    const[login,setLogin]=useState(true)
    const[resgister,setRegister]=useState(false)

    const[name,setname]=useState("")
    const[password,setPassword]=useState("")
    const[email, setEmail] = useState("")

    const[error, setError] = useState("")
    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()

        if(!email || !password){
            setError("Please enter name and password")
            return
        }
        const data={
            email,password
        }
        axios
         .post("http://localhost:5000/api/auth/login", data)
         .then((res)=>{
            localStorage.setItem("token",res.data.token)  //store token
            navigate("/")
            setError("")
         })
         .catch((err)=>{
            setError("Invalid Credentials")
         })
    }

    const handleRegister=(e)=>{
        e.preventDefault()
        if(!email || !name || !password){
            setError("Please enter email, name and password")
            return
        }
        const data={
            email,name,password
        }
        axios
         .post("http://localhost:5000/api/auth/register",data)
         .then((res)=>{
            localStorage.setItem("token",res.data.token)
            navigate("/")
            setError("")    
         })
         .catch((err)=>{
            console.log(err);
            setError("Registration Failed")
         })
    }
    return(
        <div className="max-w-sm lg:max-w-4xl mx-auto my-10 bg-[#e1e1e1] rounded-lg p-6 flex justify-center gap-10">
            <div className="hidden lg:block lg:w-1/2 p-4 bg-white rounded-lg">
                <img src={login ? images.loginImg :images.registerImg} alt="login img" 
                     className="w-full rounded-lg object-cover h-full"/>
            </div>
            <div className="flex flex-col items-center lg:w-1/2 justify-center">
                <h6 className="text-sm">Welcome to TOTC</h6>
                <div className="rounded-full bg-[#49bbbd89]  p-2 flex gap-2 text-white my-6">
                    <button className={`${login && "bg-[#49BBBD]" } px-4 py-1 rounded-full w-26 cursor-pointer`}
                            onClick={()=>{
                                setLogin(true)
                                setRegister(false)
                            }}>Login</button>
                    <button className={`${resgister && "bg-[#49BBBD]"} px-4 py-1 rounded-full w-26 cursor-pointer`}
                            onClick={()=>{
                                setLogin(false)
                                setRegister(true)
                            }}>Register</button>
                </div>
                {error && <p className="text-red-600">{error}</p>}

                {login && (<form action="" className="flex flex-col w-full">
                    <label htmlFor="" className="mb-2">Email</label>
                    <input type="text" 
                           placeholder="Enter Your Username"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           className="border-2 border-[#49bbbd] p-2 rounded-full mb-6 bg-white outline-none"/>
                    <label htmlFor="" className="mb-2">Password</label> 
                    <input type="text" 
                           placeholder="Enter Your Password"
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                           className="border-2 border-[#49bbbd] p-2 rounded-full bg-white outline-none"/> 

                    <div className="flex flex-col md:flex-ro justify-between items-center mt-4 mb-10 "> 
                        <div className="flex gap-2 items-center">
                            {/* <input type="text" name="" id="remember"/> */}
                            <p className="text-[#21a7a9]">Remember me ?</p>
                        </div>
                        <div>
                            <p className="text-[#21a7a9]">Forgot Password ?</p>
                        </div>
                    </div> 
                    <div className="flex justify-end">
                        <button className="bg-[#49BBBD] px-4 py-1 rounded-full w-26 cursor-pointer text-white"
                                onClick={handleLogin}>Login</button>
                    </div>           
                </form>
                )}


                {resgister && (
                <form action="" className="flex flex-col w-full">
                    <label htmlFor=""className="mb-2">Email Address</label>
                    <input type="email"
                           placeholder="Enter Your email address"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           className="border-2 border-[#49bbbd] p-2 rounded-full mb-6 bg-white outline-none" />
                    <label htmlFor=""className="mb-2">User Name</label> 
                    <input type="text" 
                           placeholder="Enter Your Username"
                           value={name}
                           onChange={(e)=>setname(e.target.value)}
                           className="border-2 border-[#49bbbd] p-2 rounded-full mb-6 bg-white outline-none" /> 
                    <label htmlFor="" className="mb-2"> Password</label> 
                    <input type="password"
                           placeholder="Enter Your password"
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                           className="border-2 border-[#49bbbd] p-2 rounded-full bg-white outline-none" /> 
                    <div className="flex justify-end mt-10">
                        <button className="bg-[#49BBBD] px-4 py-1 rounded-full w-26 cursor-pointer text-white"
                                onClick={handleRegister}>Register</button>
                    </div>                  
                </form>
                )}
            </div>
        </div>
    )
}
export default Login


