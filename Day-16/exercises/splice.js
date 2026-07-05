let fruits = ["Apple","Banana","Mango","Orange"];
fruits.splice(1,1); //Remove Banana
fruits.splice(0,0,"Grapes");//Add Grapes
console.log(fruits);
fruits.splice(2,1,"Grapes");//Replace Mango with Kiwi
console.log(fruits);
