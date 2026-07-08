let a =parseInt(prompt("Enter Your Number"));
let b = parseInt(prompt("Menu 1.Print Even Numbers 2.Print Odd Numbers 3.Multiplication Table 4.Countdown"));
switch(b){
    case 1:
        for (let i = 2; i <= a; i += 2) { 
            console.log(i); 
        }
        break;
    case 2:
        for(let i=1;i<=a;i=i+2){
           console.log(i)
        }
        break;
    case 3:
        for(let i=a;i <= a*10;i=i+a){
           console.log(i)
        }
        break;
    case 4:
        for(let i=a;i>0;i=i-1){
           console.log(i)
        }
        break;
    default:console.log(`Your Number ${b} isInvalid`)
}

