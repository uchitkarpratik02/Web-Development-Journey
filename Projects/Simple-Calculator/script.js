document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.getElementById('calc-btn');
    
    calcButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);

        if (isNaN(num1) || !isFinite(num1) || isNaN(num2) || !isFinite(num2)) {
            alert("Please enter valid numbers in both fields.");
            return;
        }

        const plus = num1 + num2;
        const minus = num1 - num2;
        const multiply = num1 * num2;
        
        let divide;
        if (num2 === 0) {
            divide = "Cannot divide by 0";
        } else {
            divide = num1 / num2;
            if (!Number.isInteger(divide)) {
                divide = divide.toFixed(4);
            }
        }

        document.getElementById('res-plus').textContent = plus;
        document.getElementById('res-minus').textContent = minus;
        document.getElementById('res-multiply').textContent = multiply;
        document.getElementById('res-divide').textContent = divide;
    });
});
