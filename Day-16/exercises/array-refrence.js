let arr1 = [1,2,3];
let arr2 = arr1; //arr1 and arr2 address are equal
console.log(arr2 == arr1); 
arr2.push(4); //4 is add on arr1 and arr2 both beacuse their address is same
console.log(arr1);
