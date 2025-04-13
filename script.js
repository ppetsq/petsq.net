// Film grain and old TV effects
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.bento-item');
    
    // Staggered fade-in effect with subtle glitching
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            
            // Add subtle glitch effect occasionally
            if (Math.random() > 0.6) {
                setTimeout(() => {
                    item.classList.add('glitch');
                    setTimeout(() => {
                        item.classList.remove('glitch');
                    }, 100);
                }, 300 + Math.random() * 1000);
            }
        }, 100 + (index * 70));
    });
    
    // Add occasional subtle glitches to simulate old TV
    setInterval(() => {
        if (Math.random() > 0.9) {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            randomItem.classList.add('glitch');
            setTimeout(() => {
                randomItem.classList.remove('glitch');
            }, 50 + Math.random() * 100);
        }
    }, 5000);
});