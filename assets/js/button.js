document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  function toggleDarkTheme() {
      document.body.classList.toggle('dark-mode');
      const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
      // Update button content based on the theme
      themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }

  themeToggle.addEventListener('click', toggleDarkTheme);

  // Initialize theme on page load
  const userThemePreference = localStorage.getItem('theme') || 'light'; // default to light theme
  if (userThemePreference === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = '☀️'; // Update for dark mode
  }
});
