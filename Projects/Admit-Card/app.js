document.getElementById('admitCardForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('inputName').value;
    const roll = document.getElementById('inputRoll').value;
    const course = document.getElementById('inputCourse').value;
    const date = document.getElementById('inputDate').value;
    const centre = document.getElementById('inputCentre').value;
    const photoFile = document.getElementById('inputPhoto').files[0];

    document.getElementById('cardName').textContent = name;
    document.getElementById('cardRoll').textContent = roll;
    document.getElementById('cardCourse').textContent = course;
    document.getElementById('cardDate').textContent = date;
    document.getElementById('cardCentre').textContent = centre;

    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('cardPhoto').src = event.target.result;
        };
        reader.readAsDataURL(photoFile);
    }

    document.getElementById('printBtn').removeAttribute('disabled');
});

document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});
