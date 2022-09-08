const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((quote) => displayQuote(quote));
};
loadQuote();
const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quote");
  blockQuote.innerText = quote.quote;
};
