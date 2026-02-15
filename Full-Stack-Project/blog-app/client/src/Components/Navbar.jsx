import React from "react";
import {Link} from "react-router-dom"

const Navbar =()=>{
    return(
         <div className="flex justify-between px-8 md:px-12 lg:px-20 py-3 bg-blue-400 text-sm md:text-lg">
             <Link to="/" className="px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  bg-slate-600 rounded text-white text-sm md:text-base active:scale-95 transition duration-150 hover:bg-slate-500 " >Home</Link>  
             <Link to="/create-post" className="px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3  bg-slate-600 rounded text-white text-sm md:text-base active:scale-95 transition duration-150 hover:bg-slate-500">Create Post</Link>  
         </div>
    )
}
export default Navbar;