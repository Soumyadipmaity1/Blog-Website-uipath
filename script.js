const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    body.style.backgroundColor = '#1f2833';
    body.style.color = '#c5c6c7';
    themeToggle.textContent = '🌞'; // Change icon for light mode
  } else {
    body.style.backgroundColor = '#0b0c10';
    body.style.color = '#fff';
    themeToggle.textContent = '🌓'; // Change icon for dark mode
  }
}

themeToggle.addEventListener('click', toggleTheme);