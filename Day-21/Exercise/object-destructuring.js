const laptop = {
    brand: "Dell",
    ram: "16GB",
    processor: "i7",
    price: 75000
};

let { brand, ram, processor, price } = laptop;

console.log(brand);
console.log(ram);
console.log(processor);
console.log(price);
let {...info}=laptop;
console.log(info)