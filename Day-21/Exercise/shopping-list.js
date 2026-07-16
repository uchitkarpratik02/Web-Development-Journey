const cart = [
    {item:"Milk",qty:2},
    {item:"Bread",qty:1},
    {item:"Eggs",qty:12}
];

const itemNames = cart.map(entry => entry.item);

const multiQtyItems = cart.filter(entry => entry.qty > 1);

const totalQty = cart.reduce((sum, entry) => sum + entry.qty, 0);
