const button = document.getElementById('actionBtn');

button.addEventListener('mouseenter', () => {
    console.log('👉 mouseenter');
});

button.addEventListener('click', () => {
    console.log('💥 click');
});

button.addEventListener('mouseleave', () => {
    console.log('👋 mouseleave');
});
