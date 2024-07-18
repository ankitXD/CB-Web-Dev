const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the math book look sad? Because it had too many problems.", 
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why was the stadium so cool? It was filled with fans!",
  "What do you call cheese that isn't yours? Nacho cheese!"
];

const jokeBtn = document.getElementById('jokeBtn')
const joke = document.getElementById('joke')

jokeBtn.addEventListener('click',()=>{
  const idx = Math.floor(Math.random()*jokes.length)
  joke.textContent=jokes[idx]
})

// jokeBtn.addEventListener('click',genJoke)

// function genJoke(){
//   const idx = Math.floor(Math.random()*jokes.length)
//   joke.textContent=jokes[idx]
// }