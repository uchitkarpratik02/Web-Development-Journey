const ages = [12, 18, 25, 30, 15, 40];

let Adults = ages.filter(el => {
    if(el>=18){
        return el;

    }
})
console.log(Adults);

let Teenagers = ages.filter(el => {
    if(12<el &&  el<20){
        return el;

    }
})
console.log(Teenagers);

let age_25 = ages.filter(el => {
    if(el>=25){
        return el;

    }
})
console.log(age_25);

let odd = ages.filter(el => {
    if(el%2!==0){
        return el;

    }
})
console.log(odd);

let even = ages.filter(el => {
    if(el % 2 ==0){
        return el;

    }
})
console.log(even);
console.log(ages);