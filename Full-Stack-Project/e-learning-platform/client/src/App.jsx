import React from 'react'
import Navbar from './Components/Common/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Common/Footer'
import Home from './Screens/Home'
import Login from './Screens/Login'
import Courses from './Screens/Courses'
import Blogs from './Screens/Blogs'
import CourseDetails from './Screens/CourseDetails'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/courses' element={<Courses/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App