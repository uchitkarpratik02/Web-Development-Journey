let cart = [
    "Milk",
    "Bread",
    "Rice",
    "Sugar",
    "Tea"
];

let option = parseInt(prompt("1.Display all items 2. Number each item 3.Search item 4.Count total items 5.Print in reverse order"));

switch (option) {
    // 1. Display all items
    case 1:
        console.log(cart);
        break;

    // 2. Number each item
    case 2:
        for (let i = 0; i < cart.length; i++) {
            console.log(i, cart[i]);
        }
        break;

    // 3. Search item
    case 3:
        let ser = prompt("Search item");
        if (cart.includes(ser)) {
            console.log("Item are Available");
        } else {
            console.log("Item are Not Available");
        }
        break;

    // 4. Count total items
    case 4:
        console.log(`total items:${cart.length} `);
        break;

    // 5. Print in reverse order
    case 5:
        console.log(cart.reverse());
        break;
}
