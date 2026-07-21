const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'green-theme');
        document.body.classList.add(`${button.id}-theme`);
    });
});
