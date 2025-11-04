//!Import Single Module
// import addition  from "./math.mjs";
// addition(10,10)

//!Import Multiple/Entire Module
//math=object
import math from "./math.mjs"
math.addition(10,10)
math.substraction(50,20)
console.log(math.name);
console.log(math.value);


//!Import Module by destructuring
// import{addition,substraction,value,name}from "./math.mjs"
// addition(40,20)
// substraction(50,10)
// console.log(name);
// console.log(value);

