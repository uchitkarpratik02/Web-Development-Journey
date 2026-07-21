const clickBtn = document.getElementById('clickBtn');
const keyInput = document.getElementById('keyInput');
const actionLog = document.getElementById('actionLog');

clickBtn.addEventListener('click', function() {
    actionLog.textContent = 'Button was clicked!';
});

keyInput.addEventListener('keydown', function(event) {
    actionLog.textContent = 'Keyboard Key Pressed: ' + event.key;
});

const liveInput = document.getElementById('liveInput');
const liveOutput = document.getElementById('liveOutput');

liveInput.addEventListener('input', function(event) {
    liveOutput.textContent = 'Sync output: ' + event.target.value;
});

const themeSelect = document.getElementById('themeSelect');

themeSelect.addEventListener('change', function(event) {
    const theme = event.target.value;
    document.body.className = '';
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'blue') {
        document.body.classList.add('blue-theme');
    }
});

const toggleCheckbox = document.getElementById('toggleCheckbox');
const checkboxStatus = document.getElementById('checkboxStatus');

toggleCheckbox.addEventListener('change', function(event) {
    if (event.target.checked) {
        checkboxStatus.textContent = 'Status: Enabled';
    } else {
        checkboxStatus.textContent = 'Status: Disabled';
    }
});

const practiceForm = document.getElementById('practiceForm');
const formOutput = document.getElementById('formOutput');
practiceForm.addEventListener('submit', function(event) {
    event.preventDefault();    
    const usernameVal = document.getElementById('username').value;
    const emailVal = document.getElementById('useremail').value;    
    formOutput.textContent = 'Form Data Saved -> Name: ' + usernameVal + ' | Email: ' + emailVal;
    formOutput.classList.remove('hidden');    
    console.log('Submitted Username:', usernameVal);
    console.log('Submitted Email:', emailVal);
});
