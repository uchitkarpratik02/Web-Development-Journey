function multiplier(x) {
    return function(y) {
        return x * y;
    };
}
let double = multiplier(2);
console.log(double(10));