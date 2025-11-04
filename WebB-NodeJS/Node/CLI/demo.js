console.log("Hello EveryOne");

function greet(name){
    console.log(`Hello ${name}`);
    
}
// greet("abcd")
//process is a object,
//we will get 3 output.output will be node path ,absolute path of file,in terminal  which we have  pass value 
// console.log(process.argv);

// greet(process.argv[3])

const arg = process.argv[2]
console.log(arg);

