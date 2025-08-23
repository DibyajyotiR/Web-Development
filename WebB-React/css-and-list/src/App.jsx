import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StyleObject from './Components/StyleObject'
import InlineCss from './Components/InlineCss'
import GlobalCSS from './Components/GlobalCSS'
import Contents from './Components/Contents'
import Product from './Components/Product'
import "./style.css";

const App=()=> {

  return (
    <div>
      {/* <InlineCss/>
      <StyleObject/>  
      <GlobalCSS/>   */}
      <Product/>
      {/* <Contents /> */}
    </div>
  )
}

export default App
