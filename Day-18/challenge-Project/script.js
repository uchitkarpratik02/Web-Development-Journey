const large = prompt("Enter The Maximum Number");
const myguess = Math.floor(Math.random()*large)+1;
let guess = prompt("Guess the Number");
while(true){
    if(guess==="Quite"){
        console.log(`Game Quite and The Number is      ${myguess}`);
        break;
    }
    if(guess==myguess){
        console.log(`Congratulation, Your Guess is Correct ${myguess}`);
        break;
    }
    else if(guess<myguess){
        guess = prompt("Your Gussing is Small Again Guess the Number");
    }
    else if(guess>myguess){
        guess = prompt("Your Gussing is Large Again Guess the Number");
    }
}

