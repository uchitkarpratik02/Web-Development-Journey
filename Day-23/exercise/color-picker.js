document.getElementById('colorPicker').addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
    document.getElementById('colorCode').textContent = selectedColor;
});
