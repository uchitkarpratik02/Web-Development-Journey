document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.getElementById('calcBtn');
    const resultElement = document.getElementById('result');

    calcButton.addEventListener('click', () => {
        const num1Input = document.getElementById('num1').value;
        const num2Input = document.getElementById('num2').value;

        if (num1Input === "" || num2Input === "") {
            resultElement.innerHTML = "Please enter both numbers.";
            resultElement.className = "error";
            return;
        }

        const number1 = parseFloat(num1Input);
        const number2 = parseFloat(num2Input);

        const sum = number1 + number2;
        resultElement.className = ""; 
        resultElement.innerHTML = `Result: ${sum}`;
    });
});
