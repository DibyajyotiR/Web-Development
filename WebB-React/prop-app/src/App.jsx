import React from "react";
import Product from "./Components/Products";
import TheProp from "./Components/Props";
import AllStudents from "./Components/PersonalDetails";
import Student from "./Components/Students";
import PersonalDetails from "./Components/PersonalDetails";

const App = () => {
  return (
    <div>
      <Product
        name="Mobile"
        price="10000"
        rating="4.5"
        description="lorem ipom xcndskjnc jsdnwkjndwlkd jdnkndlkand."
      />
      <Product
        name="Tab"
        price="10000"
        rating="4.5"
        description="lorem ipom xcndskjnc jsdnwkjndwlkd jdnkndlkand."
      />
      <Product
        name="Laptop"
        price="10000"
        rating="4.5"
        description="lorem ipom xcndskjnc jsdnwkjndwlkd jdnkndlkand."
      />

      <TheProp
        name="Laptop"
        price="500000"
        rating="4.5"
        description="lorem ipom xcndskjnc jsdnwkjndwlkd jdnkndlkand."
      />
         
       <AllStudents name="Akash" age="20" address="Bbsr" Class="10th"/>  
       
    </div>
  );
};

export default App