// Matrix-style animations and effects
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.bento-item');
    
    // Staggered fade-in effect with Matrix-style glitching
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            
            // Add glitch effect after appearing
            setTimeout(() => {
                item.classList.add('glitch');
                setTimeout(() => {
                    item.classList.remove('glitch');
                }, 200);
            }, 300);
        }, 100 + (index * 100));
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
    
    // Matrix digital rain effect (simple version)
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        // Random character change effect for logo
        const originalText = logoElement.textContent;
        const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";
        
        logoElement.addEventListener('mouseover', function() {
            let iterations = 0;
            const maxIterations = 3;
            
            const interval = setInterval(() => {
                logoElement.textContent = logoElement.textContent.split("")
                    .map((char, idx) => {
                        if (iterations < maxIterations) {
                            return matrixChars[Math.floor(Math.random() * matrixChars.length)];
                        } else {
                            return originalText[idx];
                        }
                    })
                    .join("");
                
                iterations += 1/3;
                
                if (iterations >= maxIterations + 1) {
                    clearInterval(interval);
                    logoElement.textContent = originalText;
                }
            }, 50);
        });
    }
});