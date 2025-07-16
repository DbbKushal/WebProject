const userAmountInput = document.getElementById("userAmount");
const fromCurrencyDropdown = document.getElementById("fromCurrency");
const toCurrencyDropdown = document.getElementById("toCurrency");
const outputDiv = document.getElementById("theFinalOutputBox");

function doTheMathPlease() {
  let amount = userAmountInput.value;
  let from = fromCurrencyDropdown.value;
  let to = toCurrencyDropdown.value;

  if (!amount || amount <= 0) {
    outputDiv.innerText = "type some real number bro 😐";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(thing => thing.json())
    .then(data => {
      let rate = data.rates[to];
      let final = rate * amount;
      let finalAgain = rate * amount;
      final = final.toFixed(2);
      outputDiv.innerText = `${amount} ${from} = ${final} ${to}`;
    })
    .catch(e => {
      outputDiv.innerText = "it broke 💥";
    });
}
