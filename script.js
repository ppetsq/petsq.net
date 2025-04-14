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
        
        // Force reflow and repaint by completely removing and re-adding the theme attribute
        document.documentElement.removeAttribute('data-theme');
        
        // Force a browser reflow between removing and adding
        void document.documentElement.offsetHeight;
        
        // Now set the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Add click event to avatar for toggling theme
    document.querySelector('.avatar').addEventListener('click', toggleTheme);
    
    // Add spacebar event listener to toggle theme
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is the spacebar (key code 32)
        if (event.keyCode === 32 || event.key === ' ') {
            // Prevent default spacebar behavior (like scrolling)
            event.preventDefault();
            
            // Toggle the theme
            toggleTheme();
        }
    });
    
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