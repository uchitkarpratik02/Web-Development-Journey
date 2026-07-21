const textInput = document.querySelector('#text-input');
const counter = document.querySelector('#counter');

textInput.addEventListener('input', function() {
    counter.textContent = this.value.length;
});
