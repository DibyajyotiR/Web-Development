import React from "react";
import {Link} from "react-router-dom"

const Navbar =()=>{
    return(
         <div>
             <Link to="/" className="px-4 py-2 bg-slate-500 rounded text-white text-sm md:text-base" >Home</Link>  
             <Link to="/create-post" >Create Post</Link>  
         </div>
    )
}
export default Navbar;