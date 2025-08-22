import React from "react";

const TheProp = (props)=>{
    console.log(props);
    const{name,price,rating,description}=props;
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h2>Price : {props.price}</h2>
            <p>Rating : {props.rating}</p>
            <p>Description : {props.description}</p>
        </div>
    )
}
export default TheProp;