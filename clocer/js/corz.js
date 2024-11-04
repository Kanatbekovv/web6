function displayTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("timeDisplay").textContent = currentTime;
    if (timeDisplay.style.display === 'none') {
        timeDisplay.style.display = 'block'; 
    } else {
        timeDisplay.style.display = 'none';
    }

}

function Greeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon!";
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }
        document.getElementById("greetingMessage").textContent = greeting;
    if (greetingMessage.style.display === 'none') {
        greetingMessage.style.display = 'block'; 
    } else {
        greetingMessage.style.display = 'none';
    }
    
}

