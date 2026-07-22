let select =document.getElementById('techSelect');
select.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    console.log('Selected option:', selectedValue);
});
