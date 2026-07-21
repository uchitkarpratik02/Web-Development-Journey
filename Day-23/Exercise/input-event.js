document.getElementById('nameInput').addEventListener('input', function(event) {
    const inputValue = event.target.value;
    document.getElementById('greeting').textContent = 'Hello ' + inputValue;
});
