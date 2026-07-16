const products = [
    {name:"Mouse",price:500},
    {name:"Keyboard",price:1200},
    {name:"Monitor",price:10000}
];
// map()
let available =products.map((el )=> {return el.name});
console.log(available);
//filter()
let above_600 =products.filter((el )=> {
    if(el.price >600){
        return el;
    }
    
});
console.log(above_600);
//reduce()
let highprice =products.reduce( (acc,el ) => {
    if(acc.price > el.price){
        return acc;
    }else{
        return el;
    }    
});
console.log(highprice);