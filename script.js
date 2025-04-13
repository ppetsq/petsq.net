// Simple animation effects for page load
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.bento-item');
    
    // Staggered fade-in effect
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 70));
    });
    
    // Handle YouTube embed click to play
    const videoContainers = document.querySelectorAll('.embed-container');
    videoContainers.forEach(container => {
        container.addEventListener('click', function() {
            const iframe = this.querySelector('iframe');
            if (iframe && iframe.src.indexOf('autoplay=1') === -1) {
                iframe.src += '&autoplay=1';
            }
        });
    });
});