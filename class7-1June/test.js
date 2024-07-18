// const obj = {
//   count: 10,
//   increment: function() {
//       setTimeout(() => {
//           console.log(this.count);
//       }, 1000);
//   }
// };
// obj.increment();

// console.log(foo);
// var foo = 'Hello';
// console.log(bar);
// function bar() {
//     return 'World';
// }
// console.log(bar());

// const obj = {
//   '1': 'one',
//   1: 'two',
//   3: 'three'
// };
// console.log(obj['1'], obj[1], obj[3]);

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }, 1000);
// }

// function arraySum(){
//   const arr = [1,2,3,4];
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }
//   console.log(sum)
// }
// arraySum()

// const arr = [1,2,3,4];
// let max = 0;
// arr.sort();
// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index])
// }

// function checkPrime(){
//   var n = 3;
//   if(n%2==0){
//     console.log("It's Prime")
//   } else {
//     console.log("Not Prime");
//   }
// }
// checkPrime()

// function binarySearch(arr,item){
//   var lo = 0;
//   var hi = arr.length-1;
//   while (lo <= hi) {
//     const mid = Math.floor((lo + hi) / 2);
//     if (arr[mid] == item) {
//       return mid;
//     } else if (arr[mid] < item) {
//       lo = mid + 1;
//     } else {
//       hi = mid - 1;
//     }
//   }
//   return -1;
// }
// const arr = [0,1,2,3,4,5,6,7,8,9];
// const item = 6;
// const index = binarySearch(arr, item);
// console.log(index);

// function maxElement(){
//   const arr = [1,2,3,4,7,8,9,7,10,1];
//   var max = (Math.max[arr]);
//   console.log(max)
// }
// maxElement()