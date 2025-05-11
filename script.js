document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const ruContent = document.querySelector('.content-section[data-lang="ru"]');
    const enContent = document.querySelector('.content-section[data-lang="en"]');

    languageToggle.addEventListener('change', function() {
        if (this.checked) {
            // Switch to English
            ruContent.classList.remove('active');
            enContent.classList.add('active');
        } else {
            // Switch to Russian
            enContent.classList.remove('active');
            ruContent.classList.add('active');
        }
    });
});


function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
  document.body.setAttribute('data-theme', 'dark');
}

hljs.highlightAll();
