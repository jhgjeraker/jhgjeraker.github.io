document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('toggle-theme');
    const htmlTag = document.documentElement;

    // Function to get the initial theme based on user preference or default to light
    function getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // If no saved theme, use system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    // Set the initial theme
    const initialTheme = getInitialTheme();
    htmlTag.setAttribute('data-theme', initialTheme);
    console.log(initialTheme);

    // Toggle theme on button click and save the preference in localStorage
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlTag.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlTag.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});