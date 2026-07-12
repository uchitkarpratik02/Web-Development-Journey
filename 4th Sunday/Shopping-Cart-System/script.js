// Initial Products Data
let products = [
  { id: 1, name: "Laptop", price: 65000, stock: 5 },
  { id: 2, name: "Mouse", price: 700, stock: 15 },
  { id: 3, name: "Keyboard", price: 1200, stock: 10 },
  { id: 4, name: "Monitor", price: 12000, stock: 8 }
];

// Shopping Cart Storage (Stores items added by user)
let cart = [];

// 1. Display Products
function showProducts() {
  console.log("\n--- Available Products ---");
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    console.log(`ID: ${p.id} | Name: ${p.name} | Price: ₹${p.price} | Stock: ${p.stock}`);
  }
}

// 2. Search Product by Name
function findProduct(name) {
  console.log(`\n--- Searching for "${name}" ---`);
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() === name.toLowerCase()) {
      return products[i];
    }
  }
  return null;
}

// 3. Add Product to Cart
function addProduct(productId, quantity) {
  console.log(`\n--- Adding Product ID ${productId} (Qty: ${quantity}) to Cart ---`);
  let product = null;

  // Find product by ID
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    console.log("Error: Product not found!");
    return;
  }

  if (product.stock < quantity) {
    console.log(`Error: Insufficient stock! Only ${product.stock} items left.`);
    return;
  }

  // Deduct stock from main inventory
  product.stock -= quantity;

  // Check if item already exists in cart
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].quantity += quantity;
      console.log(`Updated quantity for ${product.name} in cart.`);
      return;
    }
  }

  // Add new item to cart if it doesn't exist
  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity
  });
  console.log(`Successfully added ${product.name} to cart.`);
}

// 4. Update Price of an Inventory Product
function updatePrice(productId, newPrice) {
  console.log(`\n--- Updating Price for Product ID ${productId} ---`);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      products[i].price = newPrice;
      console.log(`Price updated successfully! ${products[i].name} is now ₹${newPrice}.`);
      return;
    }
  }
  console.log("Error: Product not found!");
}

// 5. Delete Product from Inventory
function deleteProduct(productId) {
  console.log(`\n--- Deleting Product ID ${productId} ---`);
  let indexToDelete = -1;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      indexToDelete = i;
      break;
    }
  }

  if (indexToDelete !== -1) {
    let removed = products.splice(indexToDelete, 1);
    console.log(`Product "${removed[0].name}" removed from inventory.`);
  } else {
    console.log("Error: Product not found!");
  }
}

// 6. Calculate Total Inventory Value
function calculateInventory() {
  let totalValue = 0;
  for (let i = 0; i < products.length; i++) {
    totalValue += products[i].price * products[i].stock;
  }
  return totalValue;
}

// 7. Find Highest Priced Product
function findHighestPrice() {
  if (products.length === 0) return null;
  let highest = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > highest.price) {
      highest = products[i];
    }
  }
  return highest;
}

// 8. Find Lowest Priced Product
function findLowestPrice() {
  if (products.length === 0) return null;
  let lowest = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price < lowest.price) {
      lowest = products[i];
    }
  }
  return lowest;
}

// 9. Calculate Total Stock in Inventory
function calculateTotalStock() {
  let totalStock = 0;
  for (let i = 0; i < products.length; i++) {
    totalStock += products[i].stock;
  }
  return totalStock;
}

// 10. Generate Invoice for Cart Items
function generateInvoice() {
  console.log("\n================ GENERATING INVOICE ================");
  if (cart.length === 0) {
    console.log("Your cart is empty! Cannot generate invoice.");
    console.log("====================================================");
    return;
  }

  let totalBill = 0;
  console.log("Items Purchased:");
  console.log("----------------------------------------------------");
  
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let itemTotal = item.price * item.quantity;
    totalBill += itemTotal;
    console.log(`${item.name} x ${item.quantity} | Unit Price: ₹${item.price} | Subtotal: ₹${itemTotal}`);
  }
  
  console.log("----------------------------------------------------");
  console.log(`TOTAL AMOUNT PAYABLE: ₹${totalBill}`);
  console.log("====================================================");
}


// ==========================================
// TEST EXECUTION RUN (Simulating Console Operations)
// ==========================================

// Initial view
showProducts();

// Search feature
let searchResult = findProduct("Mouse");
if (searchResult) {
  console.log(`Found: ID ${searchResult.id}, Price: ₹${searchResult.price}`);
} else {
  console.log("Product not found.");
}

// Stats Analysis
console.log(`\nTotal Inventory Value: ₹${calculateInventory()}`);
console.log(`Total Stock Count: ${calculateTotalStock()}`);

let expensiveItem = findHighestPrice();
console.log(`Highest Price Product: ${expensiveItem ? expensiveItem.name : "N/A"} (₹${expensiveItem ? expensiveItem.price : 0})`);

let cheapItem = findLowestPrice();
console.log(`Lowest Price Product: ${cheapItem ? cheapItem.name : "N/A"} (₹${cheapItem ? cheapItem.price : 0})`);

// Modify Inventory
updatePrice(2, 750); // Change Mouse price
deleteProduct(4);    // Delete Monitor
showProducts();      // View inventory after changes

// User Shopping Simulation
addProduct(1, 2); // Add 2 Laptops
addProduct(3, 1); // Add 1 Keyboard
addProduct(1, 1); // Add 1 more Laptop (Tests quantity aggregation)

// Show final Invoice Bill
generateInvoice();

// Show final updated inventory stock numbers
showProducts();
