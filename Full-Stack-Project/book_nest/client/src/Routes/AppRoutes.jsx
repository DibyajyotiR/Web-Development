import React from 'react'
import {Routes,Route} from "react-router-dom"

import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoutes from './ProtectedRoutes'

//User Pages
import About from '../pages/User/About'
import Home from '../pages/User/Home'
import Category from '../pages/User/Category'
import Books from '../pages/User/Books'
import BookDetails from '../pages/User/BookDetails'
import Cart from '../pages/User/Cart'
import OrderHistory from '../pages/User/OrderHistory'

//Admin
import Dashboard from '../pages/Admin/Dashboard'
import ManageBooks from '../pages/Admin/ManageBooks'
import ManageCategories from '../pages/Admin/ManageCategories'
import ManageOrder from '../pages/Admin/ManageOrder'
import ManageUser from '../pages/Admin/ManageUsers'

import NotFound from "../pages/Common/NotFound"

const AppRoutes = () => {
  return (
    <Routes>
        {/* User Layout */}
        <Route element={<UserLayout/>}>
           <Route path='/'element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/categories' element={<Category/>}/>
           <Route path='/books' element={<Books/>}/>
           <Route path='/books/:id' element={<BookDetails/>}/>
           <Route path='/cart'
                  element={<ProtectedRoutes>
                            <Cart/>
                           </ProtectedRoutes>}/>
           <Route path='/orders'
                  element={<ProtectedRoutes>
                           <OrderHistory/>
                          </ProtectedRoutes>}/>  
        </Route>

        {/* Admin Routes  */}
        <Route path='/admin'
               element={
               //<ProtectedRoutes>
                          <AdminLayout/>
                        // </ProtectedRoutes>
                        }>
            <Route index element={<Dashboard/>}/>
            <Route path='books'element={<ManageBooks/>}/>  
            <Route path='categories' element={<ManageCategories/>}/> 
            <Route path='orders'element={<ManageOrder/>}/>               
            <Route path='users' element={<ManageUser/>}/> 
        </Route>  
   
        {/* 404 */}
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes