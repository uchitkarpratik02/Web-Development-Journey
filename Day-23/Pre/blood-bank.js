// Initial blood stock in pints/units
const bloodBank = {
    "A+": 10,
    "A-": 4,
    "B+": 8,
    "B-": 2,
    "AB+": 15,
    "AB-": 1,
    "O+": 20,
    "O-": 5
};

function showStock() {
    console.log("\n--- CURRENT BLOOD BANK STOCK ---");
    console.table(bloodBank); // Displays data in a clean, readable grid
}

function donateBlood() {
    let type = prompt("Enter Blood Type to donate (e.g., A+, O-):").toUpperCase();
    if (bloodBank[type] !== undefined) {
        let amount = parseInt(prompt("Enter amount of units to add:"), 10);
        if (amount > 0) {
            bloodBank[type] += amount;
            console.log(`✅ Success: Added ${amount} units to ${type}.`);
        } else {
            console.warn("⚠️ Invalid amount entered.");
        }
    } else {
        console.error("❌ Error: Invalid blood type.");
    }
}

function requestBlood() {
    let type = prompt("Enter Blood Type requested (e.g., B+, AB-):").toUpperCase();
    if (bloodBank[type] !== undefined) {
        let amount = parseInt(prompt("Enter units needed:"), 10);
        if (amount <= bloodBank[type]) {
            bloodBank[type] -= amount;
            console.log(`🚀 Dispatching: ${amount} units of ${type} sent to hospital.`);
        } else {
            console.error(`❌ Shortage: Only ${bloodBank[type]} units of ${type} available.`);
        }
    } else {
        console.error("❌ Error: Invalid blood type.");
    }
}

function startBloodBank() {
    console.clear();
    let running = true;

    while (running) {
        let action = prompt(
            "BLOOD BANK SYSTEM\n" +
            "1. View Stock\n" +
            "2. Donate Blood\n" +
            "3. Request Blood\n" +
            "4. Exit\n" +
            "Enter choice (1-4):"
        );

        switch (action) {
            case "1":
                showStock();
                break;
            case "2":
                donateBlood();
                break;
            case "3":
                requestBlood();
                break;
            case "4":
                running = false;
                console.log("👋 System shutdown. Goodbye!");
                break;
            default:
                console.warn("⚠️ Invalid choice. Select 1, 2, 3, or 4.");
        }
    }
}

// Start the application
startBloodBank();
