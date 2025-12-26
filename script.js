const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// 1. Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    toggleBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// 2. Listen for button clicks
toggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply the new theme
    root.setAttribute('data-theme', newTheme);
    
    // Save the choice in localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update button text
    toggleBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});