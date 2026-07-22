document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameValue = document.getElementById('name').value;
    const ageValue = document.getElementById('age').value;
    const cityValue = document.getElementById('city').value;
    document.getElementById('displayName').textContent = nameValue;
    document.getElementById('displayAge').textContent = ageValue;
    document.getElementById('displayCity').textContent = cityValue;
    document.getElementById('displayArea').classList.remove('hidden');
});
