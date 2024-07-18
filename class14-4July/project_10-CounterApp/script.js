const counterDisplay = document.getElementById('counter')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')

let counter = 0;

function updateDisplay(){
  if (counter < 0) {
    counter = 0;
    counterDisplay.textContent = counter
  }
  if (counter > 50) {
      counter = 50;
      counterDisplay.textContent = counter
  }
  counterDisplay.textContent = counter
}
increaseBtn.addEventListener('click', ()=> {
  counter++
  updateDisplay()
})
decreaseBtn.addEventListener('click', ()=> {
  counter--
  updateDisplay()
})
resetBtn.addEventListener('click',()=>{
  counter = 0
  updateDisplay()
})