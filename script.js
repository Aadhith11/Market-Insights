// Simulated Market Data
const marketData = {
  spx: 4455.23,
  nasdaq: 13902.76,
  dow: 34215.88,
};

const headlines = [
  "Global markets rebound after tech rally.",
  "Oil prices dip as demand outlook weakens.",
  "Bond yields rise following Fed remarks.",
  "Apple shares climb amid earnings beat.",
  "Bitcoin stabilizes above $30,000 mark.",
];

// Populate market overview
document.getElementById('spx').textContent = marketData.spx;
document.getElementById('nasdaq').textContent = marketData.nasdaq;
document.getElementById('dow').textContent = marketData.dow;

// Populate news
const newsList = document.getElementById('news-list');
headlines.forEach(news => {
  const li = document.createElement('li');
  li.textContent = news;
  newsList.appendChild(li);
});

// Populate ticker
const ticker = document.getElementById('ticker');
ticker.innerHTML = `S&P 500: ${marketData.spx} | NASDAQ: ${marketData.nasdaq} | DOW: ${marketData.dow} | GOLD: $1933.21 | BTC: $30,120`;
