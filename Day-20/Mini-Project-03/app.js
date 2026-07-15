let timerInterval = null;
let totalSeconds = 60;
let isRunning = false;

const formatTimeUnit = (unit) => String(unit).padStart(2, "0");

const updateTime = () => {
    totalSeconds--;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    console.clear();
    console.log(`⏱️ Time Left: ${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`);
    console.log("Type: stop() to pause | reset() to clear");
};

const start = () => {
    if (isRunning) {
        console.log("⚠️ Timer is already running!");
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
    console.log("⏸️ Timer Stop.");
};

const reset = () => {
    isRunning = false;
    clearInterval(timerInterval); 
    totalSeconds = 60;
    console.clear();
    console.log("⏱️ Stopwatch reset to 00:01:00");
    console.log("Type: start() to begin");
};

console.clear();
console.log("⏱️ Console Stopwatch Initialized!");
console.log("Available commands: start(), stop(), reset()");
