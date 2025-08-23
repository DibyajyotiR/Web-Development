import React from "react";
import mobileImg from  "../assets/OIP.jpg"

const Product=()=>{
    return(
        <div>
            <img src={mobileImg} alt="" className="h-48 m-auto" />
            <h1> Nmae : Mobile</h1>
            <p>Price : 40000</p>
        </div>
    );
};
export default Product;