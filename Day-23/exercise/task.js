function startAdventure() {
    console.clear();
    console.log("=== THE MYSTERIOUS DUNGEON ===");
    console.log("You wake up in a dark room. You see a door to your LEFT and a door to your RIGHT.");
    
    let firstChoice = prompt("Type 'left' or 'right' to choose a path:").toLowerCase();

    if (firstChoice === "left") {
        console.log("\n--- THE TREASURE ROOM ---");
        console.log("You walk into a brightly lit room filled with gold! But wait... a sleeping dragon is here.");
        
        let dragonChoice = prompt("Do you 'steal' the gold or 'sneak' past?").toLowerCase();
        
        if (dragonChoice === "steal") {
            console.error("❌ GAME OVER: The dragon woke up and turned you into charcoal!");
        } else if (dragonChoice === "sneak") {
            console.log("🎉 SUCCESS: You safely bypassed the dragon and escaped out the back door with your life!");
        } else {
            console.warn("⚠️ Indecision caught you. The dragon woke up anyway. Game Over!");
        }

    } else if (firstChoice === "right") {
        console.log("\n--- THE GUARD ROOM ---");
        console.log("An angry goblin guard blocks your path!");
        
        let combatChoice = prompt("Do you 'fight' or 'run'?").toLowerCase();
        
        if (combatChoice === "fight") {
            console.log("⚔️ VICTORY: You defeated the goblin with a lucky kick and found the castle exit!");
        } else {
            console.error("❌ GAME OVER: You tried to run, but the goblin tripped you. Try again.");
        }

    } else {
        console.warn("⚠️ You stood still for too long and vanished into the void. Refresh to retry.");
    }
}

// Start the game automatically
startAdventure();
