import React from 'react'
import pic from '../assets/user.png'
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <div id='home' className='bg-black font-bold text-white px-10 md:px-10 xl:px-16 py-20 md:py-20 xl:py-30 mt-4 min-h-[80vh]'>
      <div className='flex flex-col-reverse md:flex-row gap-16 py-6 justify-center items-center'>
        {/* home */}
        <div className='flex flex-col gap-4 w-full md:w-1/2 lg:ml-15 '>
          <h2 className='text-2xl md:text-2xl lg:text-3xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]'>ASPIRING MERN STACK DEVELOPER</h2>
          <p className='text-blue-300 text-sm md:text-base xl:text-lg '>Passionate about creating modern and scalable web applications using React, Node.js, Express.js, and MongoDB with clean and efficient code.</p>
          <div>
            <div>Resume <FiDownload /> </div>
            <button></button>
          </div>
        </div>
        <div className=' relative flex justify-center w-full md:w-1/2'>
          <div className="relative">
            {/* Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-400 to-blue-600 blur-2xl opacity-40 rounded-3xl"></div>
            {/* Card */}
          <div className="relative bg-black rounded-3xl border border-cyan-500 p-4"> 
              <img src={pic} alt="avatar"  className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover "/>
          </div>
          </div>  
        </div>
      </div>


        
    </div>
  )
}

export default Home