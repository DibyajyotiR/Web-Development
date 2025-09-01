import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StyleObject from './Components/StyleObject'
import InlineCss from './Components/InlineCss'
import GlobalCSS from './Components/GlobalCSS'
import Contents from './Components/Contents'
import Product from './Components/Product'
import "./style.css";
import ListData from './Components/ListData'
import ListEffect from './Components/ListEffect'

const App=()=> {

  return (
    <div>
      {/* <InlineCss/>
      <StyleObject/>  
      <GlobalCSS/>   
      <Product/>
      <Contents />  */}
      <ListEffect/>
    </div>
  )
}

export default App
