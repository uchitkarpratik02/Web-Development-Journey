const numbers = [5, 10, 15, 20, 25];
let square = numbers.map(el => el*el);
console.log(square);
let cube = numbers.map(el => el*el*el);
console.log(cube);
let double = numbers.map(el => el*2);
console.log(double);
let strings = numbers.map(num => String(num));
console.log(strings);