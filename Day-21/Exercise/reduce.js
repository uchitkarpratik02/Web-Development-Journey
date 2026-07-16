const prices = [120, 350, 499, 250];
//Total price
let Total_price = prices.reduce((acc,el)=>{
    return acc+el;
})
console.log(Total_price);

//Highest price
let Highest_price = prices.reduce((acc,el)=>{
    if(acc<el){
        return el
    }else{return acc}
})
console.log(Highest_price);

//Lowest price
let Lowest_price = prices.reduce((acc,el)=>{
    if(acc>el){
        return el
    }else{return acc}
})
console.log(Lowest_price);

//Average price
let Average_price = Total_price / prices.length;
console.log(Average_price);