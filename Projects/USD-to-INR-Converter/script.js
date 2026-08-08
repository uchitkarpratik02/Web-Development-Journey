const API_URL = "https://er-api.com";

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const swapBtn = document.getElementById('swap-btn');
const form = document.getElementById('converter-form');
const resultContainer = document.getElementById('result-container');
const exchangeRateText = document.getElementById('exchange-rate-text');
const convertedAmountText = document.getElementById('converted-amount');

let usdToInrRate = 95.21; 

async function updateExchangeRates() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("API transmission failure");
        
        const data = await response.json();
        if (data && data.rates && data.rates.INR) {
            usdToInrRate = data.rates.INR;
        }
    } catch (error) {
        console.warn("Using offline fallback mid-market rate due to connection status:", error);
    }
    processConversion();
}

function processConversion(event) {
    if (event) event.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    if (isNaN(amount) || amount <= 0) return;

    let finalRate;
    if (fromCurrency === toCurrency) {
        finalRate = 1;
    } else if (fromCurrency === "USD" && toCurrency === "INR") {
        finalRate = usdToInrRate;
    } else {
        finalRate = 1 / usdToInrRate;
    }

    const calculatedValue = amount * finalRate;

    exchangeRateText.textContent = `1 ${fromCurrency} = ${finalRate.toFixed(4)} ${toCurrency}`;
    
    const formattingStyle = toCurrency === "INR" ? 'en-IN' : 'en-US';
    convertedAmountText.textContent = `${calculatedValue.toLocaleString(formattingStyle, { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    })} ${toCurrency}`;
    
    resultContainer.classList.remove('hidden');
}

swapBtn.addEventListener('click', () => {
    const backupValue = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = backupValue;
    processConversion();
});

form.addEventListener('submit', processConversion);
amountInput.addEventListener('input', () => {
    if(amountInput.value !== "") processConversion();
});

updateExchangeRates();