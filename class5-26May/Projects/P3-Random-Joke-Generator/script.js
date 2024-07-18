const quotes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the math book look sad? Because it had too many problems.", 
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why was the stadium so cool? It was filled with fans!",
  "What do you call cheese that isn't yours? Nacho cheese!"
];

function generateJokeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomJoke = quotes[randomIndex];
  document.getElementById("quote").innerHTML = randomJoke;
}
 