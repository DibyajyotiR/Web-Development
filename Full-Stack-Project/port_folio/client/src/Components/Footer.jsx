import React from 'react'

import { FaGithub,FaLinkedin,FaInstagramSquare ,FaFacebook , FaWhatsappSquare,FaTelegram,FaReact} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
    const date=new Date().getFullYear()
  return (
     <div id='footer' className='bg-black font-bold text-white px-10 md:px-15 xl:px-30 py-2 md:py-4 xl:py-5 mt-10' >    
              <h2 className=' text-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(56,189,248,0.6)] text-center my-4 mb-8'>Expanding Connections Digitally</h2>
              <div className='flex flex-col md:flex-row  justify-between  mx-7 '>
                <div>
                <p className='font-semibold uppercase  border-b-1 border-gray-400'>professional</p>
                <div className='flex gap-6 p-4'>
                  <FaGithub size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-green-400 hover:text-green-400 transition duration-300 cursor-pointer"/>
                  <FaLinkedin size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-blue-500 hover:text-blue-400 transition duration-300 cursor-pointer"/>
                </div>
                </div>
                <div>
                <p className='font-semibold uppercase border-b-1 border-gray-400'>social</p>
                <div className='flex gap-6 p-4'>
                  <FaInstagramSquare size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-pink-700 hover:text-pink-700 transition duration-300 cursor-pointer"/>
                  <FaFacebook size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-blue-700 hover:text-blue-700 transition duration-300 cursor-pointer"/>
                </div>
                </div>
                <div>
                <p className='font-semibold uppercase border-b-1 border-gray-400'>contact</p>
                <div className='flex gap-6 p-4'>
                  <FaWhatsappSquare size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-green-600 hover:text-green-600 transition duration-300 cursor-pointer"/>
                  <FaTelegram size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-sky-500 hover:text-sky-500 transition duration-300 cursor-pointer"/>
                  <IoIosMail size={55} 
                            className="border border-gray-600 p-3 rounded-xl hover:border-red-600 hover:text-red-600 transition duration-300 cursor-pointer"/>
                </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-center">  
                   <span 
                   className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>© {date} Powered by React</span>
                   <FaReact size={28} className="text-cyan-400" />
                   <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>and Tailwind CSS</span>
                   <RiTailwindCssFill size={28} className="text-sky-400" />
              </div>
        </div>
  )
}

export default Footer