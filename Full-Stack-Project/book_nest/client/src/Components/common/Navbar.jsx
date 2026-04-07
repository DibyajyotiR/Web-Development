import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import assets from '../../assets/assets'
import { FaShoppingCart,FaBars,FaTimes } from "react-icons/fa";
// import Login from "../../pages/Common/Login.jsx"

const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
         <Link to="/">
          <img src={assets.logo} alt="logo" className='h-30' />
         </Link>
        {/* Desktop Menu */}
        <ul className='hidden lg:flex space-x-8 text-green-700 font-bold text-xl'>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Books</NavLink>
          </li>
          <li>
            <NavLink>Categories</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
        </ul> 
        {/* Right Section */}
        <div className='hidden lg:flex items-center space-x-6'>
          <input type="text"
                 placeholder='Search books...'
                 className='border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-800' />
        {/* Cart */}
        <Link  to='/cart' className='relative'>
           <FaShoppingCart className='text-2xl text-amber-950 hover:text-green-900 transition ' />
           <span className='absolute -top-3 -right-4 bg-amber-950 text-white px-1.5 text-sm rounded-full '>0</span>
        </Link>
        {/* Login */}

        <button className='bg-green-800 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700 transition'>Login</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <button onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ?<FaTimes size={22} /> : <FaBars size={22}/>}
          </button>
        </div>
      </div>
        {/* Mobile Menu */}
        {menuOpen && (
        <div className='lg:hidden bg-white shadow-md px-6 pb-6'>
          <ul className='flex flex-col space-y-4 text-green-950 font-medium'>
            <li>
              <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/books" onClick={()=>setMenuOpen(false)}>Books</Link>
            </li>
            <li>
              <Link to="/categories" onClick={()=>setMenuOpen(false)}>Categories</Link>
            </li>
            <li>
              <Link to="/about" onClick={()=>setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/cart" onClick={()=>setMenuOpen(false)}>Cart</Link>
            </li>
            <li>
              <Link to="/login" onClick={()=>setMenuOpen(false)}>Login</Link>
            </li>
          </ul>
        </div>
        )}
      {/* <Login isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} /> */}
    </nav>
  )
}

export default Navbar