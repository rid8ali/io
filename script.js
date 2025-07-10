
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

function toggleDarkMode() {
  const body = document.body;
  const toggle = document.querySelector('.dark-mode-toggle');
  
  body.classList.toggle('dark-mode');
  
  // Update toggle button icon
  if (body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const darkMode = localStorage.getItem('darkMode');
  const toggle = document.querySelector('.dark-mode-toggle');
  
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
  
  // Start clock and date
  setInterval(updateClock, 1000);
  updateClock();
  updateDate();
});
