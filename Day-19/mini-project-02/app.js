let accountBalance = 1000;
function checkBalance() {
    return accountBalance;
}
function deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid deposit amount.");
        return accountBalance;
    }
    accountBalance += amount;
    return accountBalance;
}
function withdraw(amount) {
    if (amount <= 0) {
        alert("Invalid withdrawal amount.");
        return accountBalance;
    }
    if (amount > accountBalance) {
        alert("Insufficient funds! Your balance is lower than the requested amount.");
        return accountBalance;
    }
    accountBalance -= amount;
    return accountBalance;
}
function exitATM() {
    alert("Thank you for using the ATM Simulator. Goodbye!");
    return false; 
}
function runATM() {
    let isRunning = true;

    while (isRunning) {
       
        let choice = prompt(
            "--- ATM SIMULATOR ---\n" +
            "Select an option:\n" +
            "1. Check Balance\n" +
            "2. Deposit Money\n" +
            "3. Withdraw Money\n" +
            "4. Exit\n\n" +
            "Enter option number (1-4):"
        );

        switch (choice) {
            case "1":
                alert("Your current balance is: $" + checkBalance());
                break;

            case "2":
                let depositInput = prompt("Enter the amount you wish to deposit:");
                let depositAmount = parseFloat(depositInput);
                let updatedDepositBalance = deposit(depositAmount);
                alert("Deposit successful! New Balance: $" + updatedDepositBalance);
                break;

            case "3":
                let withdrawInput = prompt("Enter the amount you wish to withdraw:");
                let withdrawAmount = parseFloat(withdrawInput);
                let updatedWithdrawBalance = withdraw(withdrawAmount);
                alert("Transaction completed. Remaining Balance: $" + updatedWithdrawBalance);
                break;

            case "4":
                isRunning = exitATM();
                break;

            case null: 
                isRunning = exitATM();
                break;

            default:
                alert("Invalid selection. Please choose a valid menu number (1-4).");
                break;
        }
    }
}


runATM();