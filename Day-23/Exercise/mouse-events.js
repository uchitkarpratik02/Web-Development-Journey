const box = document.querySelector("div");


box.addEventListener("mouseenter", function change(){
    box.style.backgroundColor = 'green';
});

box.addEventListener('mouseleave', () => {
   box.style.backgroundColor = 'red';
 });

box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.2)';
});

box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1.0)';
});
