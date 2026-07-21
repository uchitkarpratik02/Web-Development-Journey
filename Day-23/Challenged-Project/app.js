document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regForm');
    const aboutArea = document.getElementById('about');
    const countDisplay = document.getElementById('countDisplay');
    const courseSelect = document.getElementById('course');
    const courseBadge = document.getElementById('courseBadge');
    const profileSection = document.getElementById('profileSection');
    const msgBox = document.getElementById('msgBox');
    const btnSubmit = document.getElementById('btnSubmit');

    aboutArea.addEventListener('input', function() {
        const currentLength = this.value.length;
        countDisplay.textContent = `${currentLength} / 250`;
        
        if (currentLength > 200) {
            countDisplay.style.color = 'var(--danger)';
        } else {
            countDisplay.style.color = 'var(--secondary)';
        }
    });

    courseSelect.addEventListener('change', function() {
        if (this.value) {
            courseBadge.style.display = 'block';
            courseBadge.textContent = `Selected: ${this.value}`;
        } else {
            courseBadge.style.display = 'none';
        }
    });

    btnSubmit.addEventListener('mousedown', () => {
        btnSubmit.style.transform = 'scale(0.95)';
    });

    btnSubmit.addEventListener('mouseup', () => {
        btnSubmit.style.transform = 'scale(1)';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const checkedSkills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
                                   .map(checkbox => checkbox.value);

        const studentData = {
            "Full Name": document.getElementById('fullName').value.trim(),
            "Email": document.getElementById('email').value.trim(),
            "Phone": document.getElementById('phone').value.trim(),
            "Age": document.getElementById('age').value,
            "Gender": document.querySelector('input[name="gender"]:checked').value,
            "Course": document.getElementById('course').value,
            "City": document.getElementById('city').value.trim(),
            "Skills": checkedSkills.length > 0 ? checkedSkills.join(', ') : 'None',
            "About": document.getElementById('about').value.trim()
        };

        if (!studentData["Full Name"] || !studentData["About"]) {
            alert("Please fill in all required fields accurately.");
            return;
        }

        const outputGrid = document.getElementById('profileOutput');
        outputGrid.innerHTML = '';

        Object.keys(studentData).forEach(key => {
            const box = document.createElement('div');
            box.className = 'info-box';
            
            if (key === 'About') {
                box.classList.add('full-width');
            }

            box.innerHTML = `
                <span class="info-label">${key}</span>
                <p class="info-value">${studentData[key]}</p>
            `;
            outputGrid.appendChild(box);
        });

        profileSection.style.display = 'block';
        msgBox.style.display = 'block';
        
        profileSection.scrollIntoView({ behavior: 'smooth' });

        this.reset();
        courseBadge.style.display = 'none';
        countDisplay.textContent = '0 / 250';
        countDisplay.style.color = 'var(--secondary)';

        setTimeout(() => {
            msgBox.style.display = 'none';
        }, 4000);
    });
});
