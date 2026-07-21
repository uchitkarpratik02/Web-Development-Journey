document.getElementById('termsCheckbox').addEventListener('change', function(event) {
    const statusMessage = document.getElementById('statusMessage');
    
    if (event.target.checked) {
        statusMessage.textContent = 'Accepted';
        statusMessage.className = 'status text-success';
    } else {
        statusMessage.textContent = 'Not Accepted';
        statusMessage.className = 'status text-danger';
    }
});
