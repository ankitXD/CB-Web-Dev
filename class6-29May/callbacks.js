// function greet(personName, age, callback1, callback2) {
//     let msg = "Hello" + personName;
//     let ageofperson = age;
//     callback1(msg);
//     callback2(ageofperson);
// }
// function g1(greeting) {
//     console.log(greeting);
// }
// function g2(age) {
//     console.log(age);
// }
// greet("Abc", 25, g1, g2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async callbacks ---> 
// console.log("Start");
// setTimeout(() => {
//     console.log("this msg is delayed")
// }, 2000);
// console.log("This");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve('Operation succeeded');
//             } else {
//                 reject('Operation failed');
//             }
//         }, 2000);
//     });
// }
// console.log("Start");

// asyncOperation().then(result => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });
// console.log("End");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// variable and functions go to the call stack , promises go to microtask queue and st1 go to event loop ,microtask queue
// have priority over event loop gets exected before 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(1)
// const promise = new Promise((resolve) => {
//   console.log(2)
//   resolve()
//   console.log(3)
// })

// console.log(4)

// promise.then(() => {
//   console.log(5)
// }).then(() => {
//   console.log(6)
// })

// console.log(7)

// setTimeout(() => {
//   console.log(8)
// }, 10)

// setTimeout(() => {
//   console.log(9)
// }, 0)

//sync --> 1 2 3 4 7 5 6 9 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//imp --> arg --> function ---> 

// new Promise((resolve, reject) => {
//   resolve(1)
//   resolve(2)
//   reject('error')
// }).then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log('error')
// })

// function arg to promise

// Promise.resolve(1)
// .then(() => 2) // return 2 
// .then(3) // ignore 
// .then((value) => value * 3) // 6 
// .then(Promise.resolve(4)) // ignore 
// .then(console.log) // 6 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// async// await

// function my() {
//     return Promise.resolve("Hello");
// }

// async function my() {
//     return "Hello"; // returns a promise 
// }

// my.then(function(value) => {
//     console.log(value);
// })

// api calls--> 2000 sec 
// await will wait until promise gives us some value

// const p = await my();
//  <script >
//       async  function  my(){
//           let promise=new Promise(function(resolve,reject){
//               resolve("Hey resolved");
//           })
//           document.getElementById("h1").innerHTML=await promise;
//       }
//       my();
      
//     </script>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function f1(){
//   m("f1");
// }
// function f2(){
//   m("f2");
// }
// f1();
// f2();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function m(sum){
//   console.log(sum)
// }
// function calc(n,m){
//   let s = n + m;
//   return s;
// }
// let res = calc(1,2);
// m(res)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function m(s){
//   console.log(s)
// }
// function calc(n,m,callback){
//   let sum = n + m;
//   callback(sum);
// }
// calc(1,2,m);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const promise = Promise.resolve()
function f() {
  return promise
}

async function a() { 
  return f() 
}
async function b() { 
  return await f() 
}
function c() { 
  return f() 
}

console.log(a() === b())
console.log(b() === c())
console.log(a() === c()) 