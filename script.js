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