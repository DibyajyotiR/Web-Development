import React from "react";

const Product = ({ name, price, rating, description }) => {
  return (
    <div>
        
      <h1>Name:{name}</h1>
      <h2>Price:{price}</h2>
      <p>Rating:{rating}</p>
      <p>Description : {description}</p>
    </div>
  );
};
export default Product