function greet(callback) {
    callback();
}
function sayHello() {
    console.log("Hello!");
}
greet(sayHello);//greet(console.log("Hello!"))