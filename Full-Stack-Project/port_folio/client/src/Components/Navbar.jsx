import React, { useState } from 'react'
import { FiDownload ,FiX ,FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
  return (
    <div className=' fixed top-0 left-0 w-full z-50 bg-black text-base md:text-lg xl:text-lg  text-white px-8 md:px-10 xl:px-20 py-6 md:py-6 xl:py-7'>
        <div className='flex justify-between items-center relative'> 
          <div className='relative'>
            <div className='absolute -inset-2 bg-blue-500 blur-2xl opacity-40'></div>
            <h2 className='font-bold  text-sm sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent'>DIBYAJYOTI ROUT</h2>
          </div>
            {/* Blur Background */}
            {/* Menu */}
            <div className='hidden md:flex '>
            <ul className='flex items-center px-6 md:px-10 md:gap-6 lg:gap-20  text-sm md:text-lg font-bold'>
                <li className="relative px-3 py-1 group">
                   {/* Blur Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                  <a className="relative hover:text-blue-400 transition duration-300 " href="#home">Home</a>
                  {/* <Link className="relative hover:text-blue-400 transition duration-300 " to="/">Home</Link> */}
                </li>
                <li className="relative px-3 py-1 group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                  <a href="#about" className="relative hover:text-blue-400 transition duration-300 ">About</a>
                  {/* <Link className="relative hover:text-blue-400 transition duration-300 " to="/about">About</Link> */}
                </li>
                <li className="relative px-3 py-1 group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                  <a href="#skills" className="relative hover:text-blue-400 transition duration-300 " >Skills</a>
                  {/* <Link className="relative hover:text-blue-400 transition duration-300 " to="/skills">Skills</Link> */}
                </li>
                <li className="relative px-3 py-1 group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                  <a href="#projects"className="relative hover:text-blue-400 transition duration-300 ">Projects</a>
                  {/* <Link className="relative hover:text-blue-400 transition duration-300 " to="/projects">Projects</Link> */}
                </li>
                <li className="relative px-3 py-1 group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 blur-xl opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                  <a href="#contact" className="relative hover:text-blue-400 transition duration-300 ">Contact</a>
                  
                </li>
                <li className="relative px-3 py-1 flex gap-2 cursor-pointer group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 blur-xl opacity-0 group-hover:opacity-70 
                  transition-all duration-500 rounded-lg"></div>
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">Resume</span>
                  <FiDownload  className='relative mt-1 h-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-1'/> 
                </li>
            </ul>
            </div>


            <FiMenu className='block md:hidden cursor-pointer text-white' size={22}
                    onClick={()=>setOpenMenu(true)}/>


            <div className={`fixed top-0 left-0 w-full h-screen pl-20 bg-black/80 backdrop-blur-xl z-20 transform transition-all 
                             duration-500 ease-in-out
                 ${openMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
              <FiX size={22} className='absolute top-6 right-6 cursor-pointer'onClick={()=>setOpenMenu(false)}/>
              <ul className='flex flex-col justify-center h-full gap-8 text-xl font-bold '>
                <li className='hover:translate-x-3  transition-all duration-300 cursor-pointer'>
                  <a href='#home'
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                        onClick={()=>setOpenMenu(false)}>Home</a></li>
                <li className='hover:translate-x-3  transition-all duration-300 cursor-pointer'>
                  <a href='#about' 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                        onClick={()=>setOpenMenu(false)}>About</a></li>
                <li className='hover:translate-x-3  transition-all duration-300 cursor-pointer'>
                  <a href='#skills' 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                        onClick={()=>setOpenMenu(false)}>Skills</a></li>
                <li className='hover:translate-x-3  transition-all duration-300 cursor-pointer'>
                  <a href='#projects' 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                        onClick={()=>setOpenMenu(false)}>Projects</a></li>
                <li className='hover:translate-x-3  transition-all duration-300 cursor-pointer'>
                  <a href='#contact' 
                        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent"
                        onClick={()=>setOpenMenu(false)}>Contact</a></li>
              </ul>
            </div>        
        </div> 
    </div>
  )
}

export default Navbar