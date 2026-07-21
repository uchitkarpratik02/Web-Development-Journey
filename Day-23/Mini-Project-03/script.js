const keyDisplay = document.getElementById('key-display');
const codeDisplay = document.getElementById('code-val');
const totalDisplay = document.getElementById('total-val');
const lastDisplay = document.getElementById('last-val');
const mainBox = document.getElementById('mainBox');

let totalPressed = 0;
let lastKey = '-';

window.addEventListener('keydown', (e) => {
    const currentKey = e.key === ' ' ? 'Space' : e.key;
    
    mainBox.classList.add('active');
    
    keyDisplay.textContent = currentKey;
    codeDisplay.textContent = e.keyCode;
    
    totalPressed++;
    totalDisplay.textContent = totalPressed;
    
    lastDisplay.textContent = lastKey;
    lastKey = currentKey;
});

window.addEventListener('keyup', () => {
    mainBox.classList.remove('active');
});
