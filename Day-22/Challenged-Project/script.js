const root = document.querySelector('#root');
const cats = document.createElement('div');
cats.classList.add('cats');
const categoriesList = ['Electronics', 'Fashion', 'Books', 'Sports'];
categoriesList.forEach(c => {
    const cat = document.createElement('span');
    cat.classList.add('cat');
    cat.textContent = c;
    cats.append(cat);
});
root.append(cats);

const grid = document.createElement('div');
grid.classList.add('grid');
for (let i = 1; i <= 9; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('div');
    img.classList.add('img');
    img.textContent = 'Product Image';
    
    const name = document.createElement('h3');
    name.textContent = 'Product Item ' + i;
    name.style.margin = '0';
    
    const meta = document.createElement('div');
    meta.classList.add('meta');
    const price = document.createElement('span');
    price.textContent = 'rupees' + (100 * i);
    const rate = document.createElement('span');
    rate.textContent = 'Rating: 4.5';
    meta.append(price, rate);
    
    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = 'This is a premium high quality store item description.';
    
    card.append(img, name, meta, desc);
    grid.append(card);
}
root.append(grid);




