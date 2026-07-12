function convertToUppercase(text) {
    return text.toUpperCase();
}
function reverseString(text) {
    return text.split("").reverse().join("");
}
function countCharacters(text) {
    return text.length;
}


const sampleText = prompt("Enter Something");
console.log("Uppercase: ", convertToUppercase(sampleText)); 
console.log("Reversed:  ", reverseString(sampleText));       
console.log("Characters:", countCharacters(sampleText));     