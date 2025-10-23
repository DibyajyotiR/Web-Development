//!Export function as module
// const addition =(a,b)=>{
//     console.log(a+b);
// }
// export default addition

//!Export multiple function and values as modules
export function addition(a,b){
    console.log(a+b);
}
export function substraction(a,b){
    console.log(a-b);
}
export const value=1234
export const name="Math Module"
