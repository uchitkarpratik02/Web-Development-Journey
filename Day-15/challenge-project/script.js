let Username =prompt("Enter Your Username");
let Password =prompt("Enter Your Password");

if (Username ==="pratik" && Password==="12345"){
    alert("Welcome Pratik");
    let choice = prompt("Choose Option: 1. Profile 2. Settings 3. Logout");    
    switch(choice) {
        case "1":
            alert("Opening Profile...");
            break;
        case "2":
            alert("Opening Settings...");
            break;
        case "3":
            alert("Logging out. Goodbye!");
            break;
        default:
            alert("Invalid option selected.");
    }

}
else if(Username !=="pratik" ){
    alert("User Not Found");
}
else if(Password !=="12345" ){
    alert("Incorrect Password");
}

