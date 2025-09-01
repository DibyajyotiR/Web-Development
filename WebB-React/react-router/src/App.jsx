import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Login from './Components/Login'

const App =()=> {
  return(
    <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/contact-us' element={<Contact/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
};
export default App
