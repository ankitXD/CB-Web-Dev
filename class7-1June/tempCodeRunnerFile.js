function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function foo() { 
  console.log('Start'); 
  await delay(1000); 
  console.log('End'); 
}

foo();
console.log('After calling foo');