function add(x,y){
    return x=x+y;
}
function sub(x,y){
    return x=x-y;
}
function mul(x,y){
    return x=x*y;
}
function div(x,y){
    return x=x/y;
}
const choice = prompt("Choose an operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

const number1 = parseInt(prompt("Enter the first number:"))
const number2 = parseInt(prompt("Enter the second number:"))
switch (choice) {
        case "1":
            result = add(number1, number2);
            console.log(`Result: ${number1} + ${number2} = ${result}`);
            break;
        case "2":
            result = sub(number1, number2);
            console.log(`Result: ${number1} - ${number2} = ${result}`);
            break;
        case "3":
            result = mul(number1, number2);
            console.log(`Result: ${number1} * ${number2} = ${result}`);
            break;
        case "4":
            result = div(number1, number2);
            console.log(`Result: ${number1} / ${number2} = ${result}`);
            break;
        default:
            console.log("Invalid operation choice selection.");
    }