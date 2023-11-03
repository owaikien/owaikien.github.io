// Get the theme toggle button element
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle the dark theme and save preference
function toggleDarkTheme() {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle('dark-theme');

  // Save the user's theme preference to Local Storage
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', toggleDarkTheme);

// Check if the user's theme preference is already set
const userThemePreference = localStorage.getItem('theme');

// If the preference is set, apply the theme
if (userThemePreference === 'dark') {
  document.body.classList.add('dark-theme');
}
