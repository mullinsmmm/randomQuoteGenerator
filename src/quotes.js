// class Constructor{
//     constructor(text) {
//         this.text = text
//     }

//     randomQuote() {
//         this.text = this.text.toString().random[0];
//     }
// }

function quoteGenerator(quotes) {
    this.quotes = quotes;
    this.randomQuote = function() {
        const randomIndex = Math.floor(Math.random() * this.quotes.lenght);
        return this.quotes[randomIndex];
    }
}

const myQuoteGenerator = new quoteGenerator([
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It does not matter how slowly you go as long as you do not stop."
])
