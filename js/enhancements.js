/* ============================================
   FLOATING PARTICLES & VISUAL ENHANCEMENTS
   ============================================ */

// Add floating particles to the background
function createFloatingParticles() {
    const container = document.body;
    const particleCount = Math.min(15, Math.floor(window.innerWidth / 100));
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: radial-gradient(circle, rgba(244, 213, 169, 0.8), rgba(244, 213, 169, 0.2));
            border-radius: 50%;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            pointer-events: none;
            z-index: 1;
            animation: float-particle ${Math.random() * 30 + 20}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(244, 213, 169, 0.6);
        `;
        container.appendChild(particle);
    }
}

// Add floating love emojis to the background
function createFloatingHearts() {
    const container = document.body;
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💘', '🥰', '😍', '✨', '🌟', '💞', '💝', '🩷', '🩵', '🎀', '💐', '🌹', '💫', '⭐', '🌺', '💏'];
    const heartCount = Math.min(25, Math.floor(window.innerWidth / 70));
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        const size = Math.random() * 22 + 24; // 24-46px
        const duration = Math.random() * 40 + 20; // 20-60s
        const delay = Math.random() * 10;
        const offset = Math.random() * 200 - 100; // -100 to 100px horizontal
        
        heart.textContent = emoji;
        heart.style.cssText = `
            position: fixed;
            font-size: ${size}px;
            left: calc(${Math.random() * 100}% + ${offset}px);
            top: ${window.innerHeight + 50}px;
            pointer-events: none;
            z-index: 1;
            animation: floatHeartUp ${duration}s linear infinite;
            animation-delay: ${delay}s;
            opacity: ${Math.random() * 0.6 + 0.25};
            filter: drop-shadow(0 0 12px rgba(232, 180, 180, 0.7)) drop-shadow(0 0 6px rgba(244, 213, 169, 0.5));
            transform: rotate(${Math.random() * 360}deg);
        `;
        container.appendChild(heart);
    }
}

// Create sparkle effect on click
function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, rgba(244, 213, 169, 1), rgba(244, 213, 169, 0));
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleBlast ${0.6 + Math.random() * 0.4}s ease-out forwards;
        `;
        
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add sparkle animation keyframe
function addSparkleAnimation() {
    if (!document.getElementById('sparkle-styles')) {
        const style = document.createElement('style');
        style.id = 'sparkle-styles';
        style.textContent = `
            @keyframes sparkleBlast {
                from {
                    opacity: 1;
                    transform: translate(0, 0) scale(1);
                }
                to {
                    opacity: 0;
                    transform: translate(var(--tx), var(--ty)) scale(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add glow effect to interactive elements
function enhanceInteractiveElements() {
    const interactiveElements = document.querySelectorAll('.memory-card, .thing-card, .carousel-btn, .make-wish-btn, .envelope');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const glow = document.createElement('div');
            glow.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 50px;
                height: 50px;
                background: radial-gradient(circle, rgba(244, 213, 169, 0.4), transparent);
                border-radius: 50%;
                pointer-events: none;
                transform: translate(-50%, -50%);
                animation: glowFade 0.6s ease-out forwards;
            `;
            this.style.position = this.style.position || 'relative';
            this.appendChild(glow);
            
            setTimeout(() => glow.remove(), 600);
        });
    });
}

// Add smooth scroll reveal enhancement
function enhanceScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Create entrance sparkles
                const rect = entry.target.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top;
                createSparkles(x, y);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Mouse tracking for enhanced interactivity
function setupMouseTracking() {
    const heart = document.getElementById('heart3d');
    if (!heart) return;
    
    document.addEventListener('mousemove', (e) => {
        const rect = heart.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angleX = (e.clientY - centerY) / 100;
        const angleY = (e.clientX - centerX) / 100;
        
        heart.style.transform = `
            rotateX(${angleX * 10}deg) 
            rotateY(${angleY * 10}deg) 
            translateY(0)
        `;
    });
    
    document.addEventListener('mouseleave', () => {
        if (heart) {
            heart.style.transform = 'rotateX(-20deg) rotateY(0deg) translateY(0)';
        }
    });
}

// Initialize all enhancements
function initializeEnhancements() {
    addSparkleAnimation();
    createFloatingParticles();
    createFloatingHearts();
    enhanceInteractiveElements();
    enhanceScrollReveal();
    setupMouseTracking();
    
    // Add click effect for global sparkles
    document.addEventListener('click', (e) => {
        createSparkles(e.clientX, e.clientY);
    });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEnhancements);
} else {
    initializeEnhancements();
}

/* ============================================
   3D CAKE CANDLE TOGGLE
   ============================================ */
function toggleCandle(candle) {
    candle.classList.toggle("off");
    
    // Create sparkle effect when candle is blown out
    if (candle.classList.contains("off")) {
        const rect = candle.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top;
        createSparkles(x, y);
    }
}
