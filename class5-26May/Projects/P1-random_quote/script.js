const quotes = [
  "Believe you can and you're halfway there.",
  "Be the change you wish to see in the world.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
  "Imagination is the beginning of creation. You imagine, and then it becomes."
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quote").innerHTML = randomQuote;
}
 