import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Home from "./Screens/Home";
import CreatePost from "./Screens/CreatePost";
import EditPost from "./Screens/EditPost";
import PostDetails from "./Screens/PostDetails";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/post-details/:id" element={<PostDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;