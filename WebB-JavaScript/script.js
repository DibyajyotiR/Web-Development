console.log("first program.....")
// ctrl + / = comment on multiple lines

// there are 3type of variable (var,let,const)
//var
var a =10
console.log(a);

var a =20
console.log(a);

a =30
console.log(a);

// let
let b =10
console.log(b);

b= 15
console.log(b);

//const
const c ="hi"
console.log(c);

//const c =10 error(not allowed)
//c=10        error(not allowed)
//console.log(c);
//--------------------------------------------------------------
//what is datatype ? types of datatype ?
//there are two type of datatype :  primitive ,non primitive
console.log(typeof c);

//primitive
//number
let n =10
console.log(typeof n);
//boolean
let x = true
console.log(typeof x);
//undefined
let u
console.log(u);
console.log(typeof u);
//null
let n2 =null
console.log(n2);
console.log(typeof n2);
//string
let s ="hello"
console.log(typeof s);

let s2 ="20"
console.log(typeof s2);
//symbol
let symbolType = Symbol(10)
console.log(symbolType);
console.log(typeof symbolType);
//BigInt
let big=BigInt(999999)
console.log(big);
console.log(typeof big);
//--------------------------------------------------------------------------
//non-primitive
//array
//collection of heterogenious type  data is called array
let arr =[10,true,null,undefined,"hello",[1,2,3,4]]
console.log(arr);
console.log(arr[4]);
//object 
//we can store different type of data
let obj ={
    name:"ABCD",
    age:20,
    mark:9.5,
    address:{
        city:"BBSR",
        state:"Odisha"
    }
}
console.log(obj);
console.log(obj.age);
console.log(obj['name']);
console.log(obj.address.state);
console.log(obj.address['city']);

console.log(typeof obj);
console.log(typeof obj.age);

//function
//what is function
function example(){
    console.log("this is a example");
    console.log("example...");   
}
example()
example()
example()

//Operator in JS
//? Arithmetic Operator
let val1 = 40
let val2 = 30
let addition = val1 + val2
console.log("Addition=", addition);

// let add1=10
// let add2=20
// let addition1=add1+add2
// console.log("ADD =",addition1);

let sub = val1 - val2
console.log("Subtraction=", sub);

let multi=val1*val2
console.log("Multiplication =",multi);

let div=val1/val2
console.log("Division =",div);

let mod = val1 % val2
console.log("Modulus =",mod);

let expo = val1**val2
console.log("Exponent =",expo);

//? Assignment Operator (=,+=,-+,*=,/=,%=,**=)
let ab = 20
let xy = 90
ab +=xy  //ab=ab+xy
console.log(ab);

ab -=xy
console.log(ab);

ab *=xy
console.log(ab);

ab /=2
console.log(ab);

ab /=9
console.log(ab);

ab **=2
console.log(ab);


//?Logical operator Logical AND (&&) multiplication, Logical OR (||)Addition, Logical NOT (!)
console.log("Logical operator");
let first = true //true=1
let second = false //false=0
let third = true

console.log(first && second);
console.log(first && third); //true
console.log(first || second); //true
console.log(first || third); //true
console.log(!first); //false
console.log(!second); //true

//?Unary operator
let val = 10

console.log("Pre increment=", ++val); //11
console.log("Post increment=", val++);//11
console.log(val);//12
console.log(--val); //11
val++ //11
val-- //11
++val //12
console.log(val++);//12
console.log(val);//13
console.log("Pre Decrement= ", --val); //12
console.log("Post Decrement= ", val++); //12
console.log(val);//13

//! Conditional/Decision Making Statements
//? simple if

let age = 19
if (age >= 18) {
    console.log("You can vote");
}

//? if..else
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

//? else..if
let time = 19
// if (time < 12) {
//     console.log("Good morning");
// } else if (time >= 12 && time <= 16) {
//     console.log("Good afternoon");
// } else if (time >= 17 && time <= 24) {
//     console.log("Good evening");
// } else {
//     console.log("Invalid time");
// }

//? switch case
let value = 2
switch (value) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
        break;
    default:
        console.log("Default case");
}
//! for loop
for(let i=0;i<10;i++){
    console.log(i);
}

//!while loop
let i=1
while(i<=10){
    console.log(i);
    i++  
}

//class 4
//...................................................................................*.........................................

//! for loop
for (let i = 0; i < 10; i++) {
    // console.log(i);
}

//! while loop
let i = 1
while (i <= 10) {
    // console.log(i);
    i++
}

//! do-while loop
let j = 0
do {
    // console.log(j);
    j++
} while (j <= 10)

//! for-of loop
let arr = [10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 70]

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

for (let element of arr) {
    // console.log(element);
}

let str = "hello everyone"
for (let s of str) {
    // console.log(s);
}

//! for-in loop
let obj = {
    name: "Amit",
    age: 20,
    course: "MERN",
    address: "Bhubaneswar"
}
for (let key in obj) {
    // console.log(key);
    // console.log(obj[key]);
}


//* Array Inbuild methods
let marks = [90, 80, 85, 92, 88, 94, 95]
console.log(marks);

//! push()
// marks.push(90, 60, 70)
// console.log(marks);

//! pop()
// marks.pop()
// console.log(marks);

//! unshift()
// marks.unshift("Hello")
// console.log(marks);

//! shift()
// marks.shift()
// console.log(marks);

//! splice()
// marks.splice(2, 2) //delete
// console.log(marks);

// marks.splice(2, 2, "Hi", true) //replace
// console.log(marks);

// marks.splice(4, 0, undefined, false)
// console.log(marks);

//! slice()
let subArr = marks.slice(1, 6)
// console.log(subArr);

//! reverse()
// marks.reverse()
// console.log(marks);
// console.log(marks.reverse());

//! includes()
// console.log(marks.includes(10));
// console.log(marks.includes(90));

//! toString()
console.log(marks.toString());
// ---------------------------------------------------------------------------------*-------------------------------------------
// class 5 (19/06/2025)

let age = 20
let name = "Ashish"

// console.log("Hello, my name is ", name, " and my age is ", age);

let val = `hello`
// console.log(`Hello, my  name is ${name} and my age is ${age}`);

// console.log("Hello \n everyone");
// console.log("Hello \t everyone");


//! String inbuilt methods
let str = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus non inventore fuga laudantium minus! Consequatur mollitia sunt possimus est sed eligendi aspernatur iusto maxime ipsum tempore? Nisi ipsam beatae ipsum magni dicta!  "
// console.log(str);

//? toUpperCase()
let uppercase = str.toUpperCase()
// console.log(uppercase);

//? toLowerCase()
let lowercase = str.toLowerCase()
// console.log(lowercase);

//? trim()
let trimmedStr = str.trim()
// console.log(trimmedStr);

//? indexOf()
let idx = str.indexOf("ipsum")
// console.log(idx);

//? lastIndexOf()
let lastIndex = str.lastIndexOf("ipsum")
// console.log(lastIndex);

//? charAt()
let char = str.charAt(10)
// console.log(char);

//? replace()
let newStr = str.replace("ipsum", "Hello")
// console.log(newStr);

//? replaceAll()
let replacedStr = str.replaceAll("ipsum", "hi")
// console.log(replacedStr);

//? slice()
let subStr = str.slice(10, 50)
// console.log(subStr);

//? split()
let split = str.split(" ")
// console.log(split);

//? length
// console.log(str.length);


//! Function
//* User-defined Function
//? Normal Function
function greet() {
    console.log("Hello");
}
// greet()

function greetEveryone(str) {
    console.log(str);
}
// greetEveryone("Hello everyone")
// greetEveryone("Good morning everyone")

//? Arrow function
const sum = (a, b) => {
    console.log(a + b);
}
// sum(10, 20)

const details = (name, age, course, college) => {
    console.log(`My name is ${name}, age is ${age}, my course is ${course}, and my college name is ${college}`);
}
// details("Dandapani", 8, "BCA", "Womens College")

//? Anonymous function
const multiply = function (a, b) {
    return a * b

}
let val1 = multiply(10, 100)
// console.log(val1);


//? Callback function
// () => {

// }

//? forEach loop
let arr = [10, 20, 30, 4, 50, 6, 60]
let newArr = arr.forEach((element) => {
    console.log(element);
    return element * 2
})
console.log(newArr);







