//async function foo() {
//  let promise = new Promise((resolve, reject) => 
//  { 
//  setTimeout(() => resolve("done"), 1000);
//  });
//  let result = await promise; console.log(result);
// }
//foo();
//console.log("This will print first");

// async function foo() {
//   console.log("Hello");
//   return 42;
// }
// foo().then(console.log);

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function foo() { 
//   console.log('Start'); 
//   await delay(1000); 
//   console.log('End'); 
// }

// foo();
// console.log('After calling foo');


// async function foo() { 
//   console.log('A'); 
//   await Promise.resolve(); 
//   console.log('B'); 
// }
// foo();
// console.log('C');

// async function foo() {
//   console.log('Start');
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   console.log('End');
// }
// foo();
// foo();
// console.log('After calling foo twice');

// function a() {
//   console.log("1");
//  }
// function a() {
//   console.log("11");
//  }
// function a() {
//   console.log("111");
//  }
//  a();

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
//   async function foo() {
//   console.log('Start');
//   await delay(1000);
//   console.log('Middle');
//   await delay(500); 
//   console.log('End');
// }
// foo();
// console.log('After calling foo');

// async function foo() {
//   console.log('A');
//   await new Promise(resolve => setTimeout(resolve, 1000)); 
//   console.log('B');
// }
// async function bar() {
//   console.log('x');
//   await foo();
//   console.log('Y');
// }
// bar();
// console.log('Z');

// async function foo() { 
//   console.log('1');
//   await new Promise(resolve=> setTimeout(resolve, 100));
//   console.log('2');
//   return '3';
// }
// async function bar() { 
//   console.log('4');
//   const result = await foo();
//   console.log(result);
// }
// bar();
// console.log('5');

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function foo() { 
//   console.log('Start'); 
//   await delay(1000); 
//   console.log('After 1 second');
// } 
// async function bar() {
//   console.log('Before foo'); 
//   await foo(); 
//   console.log('After foo'); 
// }
// bar(); 
// console.log('Outside bar');