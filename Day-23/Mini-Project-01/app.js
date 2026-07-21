const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const remainingCount = document.getElementById('remainingCount');
const MAX_CHARS = 200;

textInput.addEventListener('input', () => {
    const val = textInput.value;
    const length = val.length;
    
    charCount.innerText = length;
    
    const words = val.trim().split(/\s+/);
    wordCount.innerText = val.trim() === "" ? 0 : words.length;
    
    const remaining = MAX_CHARS - length;
    remainingCount.innerText = remaining;

    if (remaining <= 10) {
        remainingCount.classList.add('limit-reached');
    } else {
        remainingCount.classList.remove('limit-reached');
    }
});
