document.getElementById("detail").addEventListener('submit', function(event) 
{
    event.preventDefault(); //not redirect to page 
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;    
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
});
