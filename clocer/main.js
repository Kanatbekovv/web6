document.addEventListener("DOMContentLoaded", () => {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");
    function formatDateTime(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }
    function updateDateTime() {
        const now = new Date();
        dateTimeDisplay.textContent = formatDateTime(now);
    }


    updateDateTime();
    setInterval(updateDateTime, 1000);
});



//theme
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

let isNightMode = localStorage.getItem('theme') === 'night';
updateTheme();

function updateTheme() {
  if (isNightMode) {
    body.classList.add('night-mode');
    themeToggleButton.classList.remove('day');
    themeToggleButton.classList.add('night');
    themeToggleButton.textContent = "Day Mode";
  } else {
    body.classList.remove('night-mode');
    themeToggleButton.classList.remove('night');
    themeToggleButton.classList.add('day');
    themeToggleButton.textContent = "Night Mode";
  }
}
themeToggleButton.addEventListener('click',() => {
  setTimeout(() =>{
    isNightMode = !isNightMode;
    localStorage.setItem('theme', isNightMode ? 'night' : 'day');
    updateTheme();
  }, 5000)
  
});

//gallery
function changeImage(src) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = src;
}

const notificationSound = new Audio('/music/click.mp3');
document.getElementById('notificationButton').addEventListener('click', () => {
  notificationSound.currentTime = 0; 
  notificationSound.play();
});


//foother contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  setTimeout(() => {
    alert('Have done!');
      this.reset(); 
  }, 30);
});




