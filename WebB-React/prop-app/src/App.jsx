import React from "react";
import Product from "./Components/Products";

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
    </div>
  );
};

export default App