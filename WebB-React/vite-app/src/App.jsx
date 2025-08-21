import React from  "react";
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import FunctionBase from "./Components/FunctionBase";
import ClassBase from "./Components/ClassBase";
const App=()=>{
  return(
    
    <div>
      <Navbar></Navbar>
      <Content></Content>
      <h1>Hello</h1>
      <p>world</p>
      <Footer></Footer>
      <ClassBase></ClassBase>
      <FunctionBase></FunctionBase>
    </div>
  )
}
export default App;