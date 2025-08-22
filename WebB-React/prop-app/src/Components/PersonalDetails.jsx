import React from "react";
import Student from "./Students"

const PersonalDetails=({name,age,address,Class})=>{
     return(
        <div>
            <h1>Name : {name} </h1>
            <h1>Age : {age} </h1>
            <h1>Address : {address} </h1>
            <h1>Class : {Class} </h1>
        </div>
    )
}
export default PersonalDetails;