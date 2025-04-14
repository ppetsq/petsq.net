// Theme toggle functionality and fade-in effects
document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle slider elements
    const toggleSlider = document.createElement('div');
    toggleSlider.className = 'theme-toggle-slider';
    
    const toggleKnob = document.createElement('div');
    toggleKnob.className = 'theme-toggle-knob';
    
    toggleSlider.appendChild(toggleKnob);
    
    // Find the avatar element and append the toggle slider
    const avatarElement = document.querySelector('.avatar .card-content');
    avatarElement.appendChild(toggleSlider);
    
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Set the initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Function to toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Add click event to avatar for toggling theme
    document.querySelector('.avatar').addEventListener('click', toggleTheme);
    
    // Staggered fade-in effect (no glitching)
    const items = document.querySelectorAll('.bento-item');
    
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 70));
    });
});