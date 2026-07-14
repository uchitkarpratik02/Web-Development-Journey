let cal = {
    // Traditional
    add: function(a, b) {
        return a + b;
    },

    // ES6 Shorthand
    sub(a, b) {
        return a - b;
    },

    // Traditional
    mul: function(a, b) {
        return a * b;
    },

    // ES6 Shorthand
    div(a, b) {
        return a / b;
    }
};

console.log(cal.add(11, 10)); // 21
console.log(cal.sub(21, 10)); // 11
console.log(cal.mul(11, 10)); // 110
console.log(cal.div(110, 10)); // 11
