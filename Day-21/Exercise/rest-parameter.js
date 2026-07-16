function total(...args) {
    return args.reduce((add, el) => {
        return add + el;
    },0)
}

console.log(total(10,20));
console.log(total(10,20,30,40));
console.log(total(5,5,5,5,5));
