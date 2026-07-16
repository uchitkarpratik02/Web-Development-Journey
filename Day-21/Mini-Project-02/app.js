let cartCollection = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 150 }
];

const addProduct = (name, price) => {
  const newProduct = { id: Date.now(), name, price };
  cartCollection = [...cartCollection, newProduct];
  console.log(`Added: ${name} ($${price})`);
};

const removeProduct = (id) => {
  const initialLength = cartCollection.length;
  cartCollection = cartCollection.filter(item => item.id !== id);
  if (cartCollection.length < initialLength) {
    console.log(`Removed product with ID: ${id}`);
  } else {
    console.log(`Product ID ${id} not found.`);
  }
};

const showProductList = () => {
  console.log("Current Shopping Cart:");
  if (cartCollection.length === 0) {
    console.log("The cart is empty.");
    return;
  }
  const formattedItems = cartCollection.map(item => `"${item.name}" - $${item.price} (ID: ${item.id})`);
  formattedItems.forEach(itemStr => console.log(itemStr));
};

const calculateTotal = () => {
  const total = cartCollection.reduce((sum, item) => sum + item.price, 0);
  console.log(`Total Amount: $${total}`);
  return total;
};

const getHighestPrice = () => {
  if (cartCollection.length === 0) return 0;
  const highest = cartCollection.reduce((max, item) => item.price > max ? item.price : max, cartCollection[0].price);
  console.log(`Highest Price: $${highest}`);
  return highest;
};

const getLowestPrice = () => {
  if (cartCollection.length === 0) return 0;
  const lowest = cartCollection.reduce((min, item) => item.price < min ? item.price : min, cartCollection[0].price);
  console.log(`Lowest Price: $${lowest}`);
  return lowest;
};

showProductList();
calculateTotal();

addProduct("Smartphone", 800);
addProduct("Mouse", 25);

showProductList();
calculateTotal();
getHighestPrice();
getLowestPrice();

removeProduct(2);

showProductList();
calculateTotal();
getHighestPrice();
getLowestPrice();
