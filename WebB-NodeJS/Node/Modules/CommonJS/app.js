// console.log("Hello Everyone,this is App.js");
//!Import addition function from math module
// const add=require("./math")
// add(20,10)


//!Import the entire math module
// const math = require("./math")
// math.addition(200,50)
// math.substraction(500,90)

//!Import the entire math module by destructuring
const {addition,substraction} = require("./math")
addition(200,50)
substraction(500,90)