let timerInterval = null;
let totalSeconds = 0;
let isRunning = false;

const formatTimeUnit = (unit) => String(unit).padStart(2, "0");

const updateTime = () => {
    totalSeconds++;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    console.clear();
    console.log(`⏱️ Running: ${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`);
    console.log("Type: stop() to pause | reset() to clear");
};

const start = () => {
    if (isRunning) {
        console.log("⚠️ Stopwatch is already running!");
        return;
    }
    isRunning = true;
    timerInterval = setInterval(updateTime, 1000); 
    console.log("⏱️ Stopwatch started!");
};

const stop = () => {
    if (!isRunning) {
        console.log("⚠️ Stopwatch is not running.");
        return;
    }
    isRunning = false;
    clearInterval(timerInterval); 
    console.log("⏸️ Stopwatch paused.");
};

const reset = () => {
    isRunning = false;
    clearInterval(timerInterval); 
    totalSeconds = 0;
    console.clear();
    console.log("⏱️ Stopwatch reset to 00:00:00");
    console.log("Type: start() to begin");
};

console.clear();
console.log("⏱️ Console Stopwatch Initialized!");
console.log("Available commands: start(), stop(), reset()");
