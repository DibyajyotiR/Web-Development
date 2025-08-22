import React from "react";
import Student from "./Students";

const AllStudents = ({name,age,address,Class})=>{
    return(
        <div>
        <Student name={name} age={age} address={address} Class={Class}/>
        </div>
    )
}
export default AllStudents;