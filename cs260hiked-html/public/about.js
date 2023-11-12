function displayQuote(data) {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        
  
        quoteEl.textContent = data.value;
        
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }

displayQuote();
