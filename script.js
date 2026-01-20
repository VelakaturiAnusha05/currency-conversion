async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (amount === "" || amount <= 0) {
    result.innerText = "Please enter a valid amount";
    return;
  }

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
    );
    const data = await response.json();
    const rate = data.rates[toCurrency];

    const convertedAmount = (amount * rate).toFixed(2);
    result.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    result.innerText = "Unable to fetch exchange rates";
  }
}
