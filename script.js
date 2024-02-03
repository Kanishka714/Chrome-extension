// Define the API endpoint
const url = "https://api.quotable.io/random";

// Function to fetch a random quote from the API
function fetchQuote() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const quoteText = data.content;
      const author = data.author;
      // Update the HTML content with the fetched quote
      document.getElementById('quote-text').textContent = `"${quoteText}"`;
      document.getElementById('author').textContent = `- ${author}`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      document.getElementById('quote-text').textContent = 'Error fetching quote.';
    });
}

// Fetch a quote when the page loads
window.addEventListener('load', fetchQuote);

// Add event listener to the "new quote" button
document.getElementById('new-quote').addEventListener('click', fetchQuote);