import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import EditPost from "./Screens/EditPost";
// import PostDetails from "./Screens/PostDetails";
import Home from './Screens/Home'
import CreatePost from './Screens/CreatePost';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App=()=>{
  return(
    <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        {/* <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="post-details/:id" element={<PostDetails />} /> */}
     </Routes>
     <Footer />
    </BrowserRouter>
  )
}
export default App;