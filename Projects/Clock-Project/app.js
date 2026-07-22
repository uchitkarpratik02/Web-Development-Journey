const themeToggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-mode") ? "light" : "dark"
    );
});
function updateClock() {
    const now = new Date();
    
    let rawHours = now.getHours();
    let ampm = rawHours >= 12 ? 'PM' : 'AM';
    
    let hours12 = rawHours % 12;
    hours12 = hours12 ? hours12 : 12;
    
    let hours = hours12.toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
    
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    document.getElementById('day').textContent = days[now.getDay()];
    
    let dayOfMonth = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear();
    document.getElementById('date').textContent = `${dayOfMonth}/${month}/${year}`;

    const progressPercent = (now.getSeconds() / 60) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

async function fetchWeatherData() {
    let lat = 21.1458;
    let lon = 79.0882;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&daily=sunrise&timezone=auto`);
        
        if (!response.ok) throw new Error("API Network response was not ok");
        
        const data = await response.json();
        
        const currentTemp = Math.round(data.current.temperature_2m);
        document.getElementById('temp').textContent = `${currentTemp}°C`;
        
        const sunriseFull = data.daily.sunrise[0]; 
        const sunriseTime = sunriseFull.split('T')[1]; 
        document.getElementById('sunrise').textContent = sunriseTime;
        
    } catch (error) {
        console.error("मौसम डेटा लोड करने में समस्या आई, डमी डेटा का उपयोग किया जा रहा है:", error);
        document.getElementById('temp').textContent = "28°C";
        document.getElementById('sunrise').textContent = "05:45";
    }
}

updateClock();
setInterval(updateClock, 1000);

fetchWeatherData();
setInterval(fetchWeatherData, 15 * 60 * 1000);
