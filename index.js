let quotes = [
  " “Be yourself; everyone else is already taken.” ― Oscar Wilde   ",
  " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ― Marilyn Monroe  ",
  " “So many books, so little time.”― Frank Zappa   ",
  " “A room without books is like a body without a soul.”― Marcus Tullius Cicero   ",
  " “You only live once, but if you do it right, once is enough.”― Mae West  ",
  " “Be the change that you wish to see in the world.”― Mahatma Gandhi  ",
  " “If you tell the truth, you don't have to remember anything.”― Mark Twain  ",
];
let index = -1;
function randomQuotes() {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === index);

  index = random;
  document.getElementById("quotes").innerHTML = quotes[random];
}
document.getElementById("btn").addEventListener("click", randomQuotes);
