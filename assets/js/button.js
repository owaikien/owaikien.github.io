document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('theme-toggle');

  function toggleDarkTheme() {
      document.body.classList.toggle('dark-theme');
      const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
  }

  themeToggle.addEventListener('click', toggleDarkTheme);

  const userThemePreference = localStorage.getItem('theme');
  if (userThemePreference === 'dark') {
      document.body.classList.add('dark-theme');
  }
});
