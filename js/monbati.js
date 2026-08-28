// Ensure the code runs only after the entire HTML page has loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all candles on the cake
    const candles = document.querySelectorAll('.candle');
    let blownOutCount = 0; // Keep track of how many candles are blown out

    // Add a click event listener to each candle
    candles.forEach(candle => {
        candle.addEventListener('click', () => {
            // If the candle is already turned off, do nothing
            if (candle.classList.contains('off')) return;

            // Add the 'off' class to blow out the candle (triggers the CSS smoke effect)
            candle.classList.add('off');
            blownOutCount++;

            // Check if all candles are blown out
            if (blownOutCount === candles.length) {
                // Trigger fireworks after a 500ms delay (allowing time for the smoke effect)
                setTimeout(triggerFireworks, 500);
            }
        });
    });

    // Function to trigger the confetti and red heart fireworks
    function triggerFireworks() {
        var duration = 5 * 1000; // 5 seconds duration
        var animationEnd = Date.now() + duration;
        
        var defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 100 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 150 * (timeLeft / duration);
            
            // 1. Regular colorful confetti burst
            confetti(Object.assign({}, defaults, { 
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            }));

            // 2. Red Heart (❤️) confetti burst
            confetti({
                particleCount: Math.floor(particleCount / 3),
                angle: 60,
                spread: 55,
                origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
                shapes: ['circle'],
                colors: ['#ff0000', '#e74c3c', '#ff3366'] // Different shades of red/pink hearts or circles representing love
            });
            
            confetti({
                particleCount: Math.floor(particleCount / 3),
                angle: 120,
                spread: 55,
                origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
                colors: ['#ff0000', '#e74c3c', '#ff3366']
            });

        }, 150);
    }
});


// Heart click animation to burst small red heart emojis
document.addEventListener('DOMContentLoaded', () => {
    const heart3d = document.getElementById('heart3d');
    
    if (heart3d) {
        heart3d.addEventListener('click', () => {
            // Trigger a concentrated burst of red hearts using canvas-confetti
            confetti({
                particleCount: 30,
                spread: 100,
                origin: { y: 0.6 },
                shapes: ['circle'],
                colors: ['#ff0000', '#ff3366', '#ff1a40']
            });

            // Also create floating HTML heart emojis dynamically on screen
            for (let i = 0; i < 15; i++) {
                createFloatingHeart();
            }
        });
    }

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(heart);

        // Random direction for each heart
        const randomX = (Math.random() - 0.5) * 400;
        const randomY = (Math.random() - 0.5) * 400;

        setTimeout(() => {
            heart.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.5)`;
            heart.style.opacity = '0';
        }, 20);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});