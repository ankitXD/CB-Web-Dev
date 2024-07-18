//call --> used to call a function with a specified this value and args provided indivisually
// function g()
// {
//     console.log("hello ", this.name + "!");
// }
// var p = { name: "A" };
// g.call(p);

// apply --> + array of arguments
// function greet(greeting) {
//     console.log(greeting + "," + this.name);
// }
// var p = { name: "A" };
// greet.apply(p, ["Hello"]); // Hello A

// function greet(greeting,value) {
//     console.log(greeting + "," + this.name+ value);
// }
// var p = { name: "A" };
// var b = greet.apply(p, ["Hello", "2"]);

//Strict Mode
//"use strict"
// function f(a,a,c){
//   return a+a+c;
// }
// f(1,2,4)

//Split()
// const h = "i am learning js"
// arr = h.split(" ")
// console.log(arr.length)

//closure--> concept -> 
// function outer() {
//     let ov = "i am outer function";
//     function inner() {
//         console.log(ov);
//     }
//     return inner;
// }
// let inner = outer();
// inner(); // i m outer function

// function c() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }
// let cc = c();
// cc(); // 1
// cc(); // 2

// function dosomething(callback) {
//   let res = 1;
//   callback(res);
// }
// function callbackfunction(value) {
//   console.log(value);
// }
// dosomething(callbackfunction);

//https://leetcode.com/problems/allow-one-function-call/description/

// var once = function(fn) {
//   let flag = false;
//   return function(...args){
//       if(!flag){
//           flag=true;
//           return fn(...args);
//       }
//       else {
//           return undefined;
//       }
//   }
// };