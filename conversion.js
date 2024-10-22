document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('conversionForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const amount = document.getElementById('amount').value;
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
  
      // Requête à l'API ExchangeRate-API
      fetch(`https://v6.exchangerate-api.com/v6/29ee143ac90c3d45c0bcb6f1/latest/${fromCurrency}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const rate = data.conversion_rates[toCurrency];
          const convertedAmount = amount * rate;
          document.getElementById('result').textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Erreur :', error));
    });
  });
  