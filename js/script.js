/* ============================================
   CONFIGURATION OBJECT (EASY CUSTOMIZATION)
   ============================================ */
const CONFIG = {
    fullName: "Nusrat Jahan Dina",
    nickname: "Dulu sona",
    secondaryNickname: "Dinuu",
    
    // Special relationship date (YYYY-MM-DD format, leave empty to hide counter)
    specialDate: "",
    
    // Audio files (optional, leave empty to hide)
    voiceNoteUrl: "",
    backgroundMusicUrl: "",
    
    // Photo carousel (customize with your own photos)
    photos: [
        { url: "assets/images/Piccih.png", caption: "My little precious one 🥹❤️…" },
        { url: "assets/images/pucu.png", caption: "My little precious one 🥹❤️…" },
        { url: "assets/images/dani.jpeg", caption: "🌹❤️…" },
        { url: "assets/images/Dulu.jpeg", caption: "Tomar oi Chokh dutoh 🥰❤️…" },
        { url: "assets/images/jaaan.jpg", caption: " 🥹💞…" },
        { url: "assets/images/jan.jpeg", caption: "💖…" }
    ],
    
    // Love letter (customize with your own message)
    loveLetter: `প্রিয় সোনা জান, ❤️

​আজ তোমার জন্মদিন। "শুভ জন্মদিন আমার সোনা জান ☺️🎂"... আমি আল্লাহর কাছে দোয়া করি, তিনি যেন তোমার সব কষ্ট দূর করে দেন 🤲✨। আর তুমি যেন খুব খুব খুশি আর সুখে থাকো। 🥰

​যখন এই চিঠিটা লিখছিলাম, তখন তোমার কথা খুব মনে পড়ছিল 🥺। তুমি হয়তো জানো না, তোমাকে ছাড়া থাকাটা আমার জন্য কতটা কঠিন! 🥀 তোমার ওই মিষ্টি হাসি, তোমার ওই মায়াবী চোখগুলো নিমিষেই আমার মন কেড়ে নেয়। 😍👀

​তুমি এমন একজন মানুষ যাকে আমি এতটা ভালোবাসবো, সেটা আমি আগে কখনোই বুঝিনি... আমি ভাবতেই পারিনি তোমাকে আমি এতটা ভালোবেসে ফেলবো। 💖 তুমি আমার জীবনে এসেছো, আর আমি আমার পুরোটা জীবন শুধু তোমাকে নিয়েই বাঁচতে চাই। 👫💕

​জানি না আমি আর কতদিন আছি তোমার সাথে😔... আর কতদিন থাকতে পারবো তোমার সাথে... ☺️🕊️ শুধু জানি তোমাকে অনেক ভালোবাসি Sona jaaan...🫣💖🌸
​আজ তোমার জন্মদিনে, আমি শুধু একটাই চাই—যে তুমি সবসময় খুশি থাকো, সবসময় হাসো 😊, এবং জানো যে আমি সবসময় তোমার পাশে আছি 🫂❤️।
ভালোবাসা দিও,

ইতি 
তোমার........ ❤️☺️`,
    
    // Random wishes (will display when candle blows out)
    wishes: [
        "তুমি সারাজীবন এভাবেই হাসিমুখে থাকো, দুলু সোনা।",
        "তোমার প্রতিটি স্বপ্ন সত্যি হোক, আমার প্রিয় Dinuu।",
        "তুমি যতো ভালো আছো, আমি হাজারো ভালো থাকি।",
        "আমাদের ভালোবাসা সবসময় এভাবেই উজ্জ্বল থাকুক।",
        "তোমার জীবনে থাকুক শুধুমাত্র সুখ আর ভালোবাসা।",
        "দুলু সোনা, তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায়।",
        "তুমি যেখানেই যাও, আমি তোমার সাথে আছি, সবসময়।",
        "Happy Birthday to the most beautiful soul in my life. ❤️"
    ],
    
    // Final hidden message
    finalMessage: "তুমি জানো না, তোমার জন্য আমি কত কিছু করতে পারি। কিন্তু আমি জানি যে তোমার হাসিটা আমার জন্য সবচেয়ে বড় পুরস্কার। সবসময় খুশি থাকো, Sonaa jaaaan amaar. আমি ভালোবাসি তোমাকে, অসীমভাবে। 🌹"
};

/* ============================================
   INITIALIZE APPLICATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initializeSplashScreen();
    initializeNightSky();
    initializeCursorTrail();
    initializeScrollReveal();
    initializeHeartInteraction();
    initializeCarousel();
    initializeEnvelope();
    initializeDateCounter();
    initializeVoiceNote();
    initializeSecretMessage();
    initializeMagneticText();
});

/* ============================================
   SPLASH SCREEN LOGIC & FULL-SCREEN FIREWORKS
   ============================================ */
function initializeSplashScreen() {
    const enterBtn = document.getElementById('enterBtn');
    enterBtn.addEventListener('click', () => {
        const splashScreen = document.getElementById('splashScreen');
        splashScreen.classList.add('hidden');
        setTimeout(() => {
            splashScreen.style.pointerEvents = 'none';
        }, 800);

        // 1. Full-screen dense confetti from center, left, and right
        fireDenseConfetti();

        // 2. Flying balloon and heart emojis
        fireEmojiBalloons();
    });

    setTimeout(() => {
        if (!document.getElementById('splashScreen').classList.contains('hidden')) {
            document.getElementById('splashScreen').classList.add('hidden');
        }
    }, 10000);
}

// ==========================================
// Full-Screen Confetti Effect
// ==========================================
function fireDenseConfetti() {
    if (typeof confetti === "function") {
        var count = 400; 
        
        var defaults = {
            origin: { y: 0.7 },
            zIndex: 999999
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        // Center explosions
        fire(0.25, { spread: 30, startVelocity: 60 });
        fire(0.2, { spread: 70 });
        
        // Left side explosion
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 80,
            origin: { x: 0, y: 0.6 },
            zIndex: 999999
        });

        // Right side explosion
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 80,
            origin: { x: 1, y: 0.6 },
            zIndex: 999999
        });
    }
}

// ==========================================
// Emoji Balloons & Hearts Function
// ==========================================
function fireEmojiBalloons() {
    const emojis = ['🎈', '❤️', '💖', '💕']; 
    const totalParticles = 40; 
    
    for (let i = 0; i < totalParticles; i++) {
        let particle = document.createElement('div');
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.position = 'fixed';
        particle.style.left = '50vw';
        particle.style.top = '50vh'; 
        particle.style.fontSize = (Math.random() * 30 + 20) + 'px'; 
        particle.style.zIndex = '999999';
        particle.style.pointerEvents = 'none';
        particle.style.transform = `translate(-50%, -50%) scale(0)`;
        particle.style.transition = 'transform 3.5s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 3.5s ease-out';
        
        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 60 + 20; 
        const tx = Math.cos(angle) * radius + 'vw';
        const ty = Math.sin(angle) * radius + 'vh';

        setTimeout(() => {
            particle.style.transform = `translate(calc(-50% + ${tx}), calc(-50% + ${ty})) scale(${Math.random() + 0.8}) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = '0';
        }, 10);

        setTimeout(() => particle.remove(), 4000);
    }
}

/* ============================================
   NIGHT SKY CANVAS
   ============================================ */
function initializeNightSky() {
    const canvas = document.getElementById('nightSkyCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = [];
    const shootingStars = [];

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 1.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.twinkleSpeed = Math.random() * 0.03 + 0.01;
            this.twinklePhase = Math.random() * Math.PI * 2;
        }

        update() {
            this.twinklePhase += this.twinkleSpeed;
            this.opacity = Math.sin(this.twinklePhase) * 0.4 + 0.5;
        }

        draw(ctx) {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = `rgba(212, 175, 140, ${this.opacity * 0.3})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class ShootingStar {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height * 0.6;
            this.vx = Math.random() * 2 + 2;
            this.vy = Math.random() * 1 + 0.5;
            this.length = Math.random() * 100 + 50;
            this.opacity = 1;
            this.life = 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= 0.01;
            this.opacity = Math.max(0, this.life);
        }

        draw(ctx) {
            ctx.strokeStyle = `rgba(255, 255, 200, ${this.opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.vx * this.length, this.y - this.vy * this.length);
            ctx.stroke();

            ctx.strokeStyle = `rgba(212, 175, 140, ${this.opacity * 0.5})`;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.vx * this.length * 0.7, this.y - this.vy * this.length * 0.7);
            ctx.stroke();
        }

        isAlive() {
            return this.life > 0 && this.x < canvas.width && this.y < canvas.height;
        }
    }

    for (let i = 0; i < 40; i++) {
        stars.push(new Star());
    }

    function animate() {
        ctx.fillStyle = 'rgba(2, 5, 11, 0.18)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
            star.draw(ctx);
        });

        shootingStars.forEach((star, index) => {
            star.update();
            star.draw(ctx);
            if (!star.isAlive()) {
                shootingStars.splice(index, 1);
            }
        });

        if (Math.random() < 0.0006) {
            shootingStars.push(new ShootingStar());
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ============================================
   CURSOR TRAIL
   ============================================ */
function initializeCursorTrail() {
    const canvas = document.getElementById('cursorTrailCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.01;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.1; 
            this.life -= this.decay;
        }

        draw(ctx) {
            ctx.fillStyle = `rgba(212, 175, 140, ${this.life * 0.6})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
            ctx.fill();
        }

        isAlive() {
            return this.life > 0;
        }
    }

    if (!prefersReducedMotion) {
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.08) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.update();
            particle.draw(ctx);
            if (!particle.isAlive()) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initializeScrollReveal() {
    const sections = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));
}

/* ============================================
   3D HEART INTERACTION
   ============================================ */
function initializeHeartInteraction() {
    const heart = document.getElementById('heart3d');

    if (!heart) return;

    heart.addEventListener('click', () => {
        heart.classList.add('pulsing');
        setTimeout(() => heart.classList.remove('pulsing'), 600);

        createSparkles(heart);
        showHeartText();
    });
}

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const emojis = ['💖', '✨', '💕', '🌹', '❤️', '⭐'];

    for (let i = 0; i < 15; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'sparkle';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const angle = (Math.PI * 2 * i) / 15;
        const distance = 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        emoji.style.left = centerX + 'px';
        emoji.style.top = centerY + 'px';
        emoji.style.setProperty('--tx', tx + 'px');
        emoji.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 1500);
    }
}

function showHeartText() {
    const textContainer = document.querySelector('.heart-text');
    textContainer.textContent = 'এই হৃদয়টা তোমার জন্যই ❤️';
    textContainer.style.opacity = '1';

    setTimeout(() => {
        textContainer.style.opacity = '0';
    }, 2000);
}

/* ============================================
   POLAROID CAROUSEL
   ============================================ */
function initializeCarousel() {
    const carousel = document.getElementById('polaroidCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function createPolaroids() {
        carousel.innerHTML = '';
        CONFIG.photos.forEach((photo, index) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid';
            if (index === 0) polaroid.classList.add('active');
            if (index === 1) polaroid.classList.add('next');
            if (index === CONFIG.photos.length - 1) polaroid.classList.add('prev');

            polaroid.innerHTML = `
                <img src="${photo.url}" alt="Memory ${index + 1}" class="polaroid-image">
                <div class="polaroid-caption">${photo.caption}</div>
            `;

            carousel.appendChild(polaroid);
        });
    }

    function updateCarousel() {
        const polaroids = carousel.querySelectorAll('.polaroid');
        polaroids.forEach((polaroid, index) => {
            polaroid.classList.remove('active', 'prev', 'next');

            const relativeIndex = (index - currentIndex + CONFIG.photos.length) % CONFIG.photos.length;

            if (relativeIndex === 0) {
                polaroid.classList.add('active');
            } else if (relativeIndex === CONFIG.photos.length - 1) {
                polaroid.classList.add('prev');
            } else if (relativeIndex === 1) {
                polaroid.classList.add('next');
            }
        });
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % CONFIG.photos.length;
        updateCarousel();
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
        updateCarousel();
    }

    createPolaroids();
    updateCarousel();
    prevBtn.addEventListener('click', prevPhoto);
    nextBtn.addEventListener('click', nextPhoto);
}

/* ============================================
   ENVELOPE LOVE LETTER
   ============================================ */
function initializeEnvelope() {
    const envelope = document.getElementById('envelope');
    const modal = document.getElementById('letterModal');
    const closeButton = document.getElementById('letterClose');
    const letterText = document.getElementById('letterText');

    if (!envelope || !modal || !closeButton || !letterText) return;

    const openLetter = () => {
        envelope.classList.add('opened');
        envelope.setAttribute('aria-expanded', 'true');
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('letter-modal-open');
        typewriterEffect(CONFIG.loveLetter, letterText);
        closeButton.focus();
    };

    const closeLetter = () => {
        envelope.classList.remove('opened');
        envelope.setAttribute('aria-expanded', 'false');
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('letter-modal-open');
        envelope.focus();
    };

    envelope.addEventListener('click', openLetter);
    envelope.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLetter();
        }
    });
    closeButton.addEventListener('click', closeLetter);
    modal.addEventListener('click', event => {
        if (event.target === modal) closeLetter();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) closeLetter();
    });
}

function typewriterEffect(text, element) {
    element.innerHTML = '';
    const tokens = text.match(/\S+|\s+/g) || [];
    let index = 0;

    function type() {
        if (index < tokens.length) {
            const token = tokens[index++];
            element.appendChild(document.createTextNode(token));
            setTimeout(type, /^\s+$/.test(token) ? 35 : 180);
        } else {
            const cursor = document.createElement('span');
            cursor.className = 'typewriter-cursor';
            element.appendChild(cursor);
        }
    }

    type();
}

/* ============================================
   BIRTHDAY CAKE & WISHES
   ============================================ */
function showWish() {
    const randomWish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)];

    const popup = document.createElement('div');
    popup.className = 'wish-popup';
    popup.innerHTML = `
        <p class="wish-text">${randomWish}</p>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('closing');
        setTimeout(() => popup.remove(), 600);
    }, 3000);
}

/* ============================================
   DATE COUNTER
   ============================================ */
function initializeDateCounter() {
    if (!CONFIG.specialDate) {
        document.getElementById('counterSection').style.display = 'none';
        return;
    }

    document.getElementById('counterSection').style.display = 'block';
    updateCounter();
    setInterval(updateCounter, 1000);
}

function updateCounter() {
    const specialDate = new Date(CONFIG.specialDate);
    const now = new Date();
    const diff = now - specialDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const counterElement = document.getElementById('counter');
    counterElement.innerHTML = `
        <div class="counter-item">
            <div class="counter-number">${String(days).padStart(3, '0')}</div>
            <div class="counter-label">Days</div>
        </div>
        <div class="counter-item">
            <div class="counter-number">${String(hours).padStart(2, '0')}</div>
            <div class="counter-label">Hours</div>
        </div>
        <div class="counter-item">
            <div class="counter-number">${String(minutes).padStart(2, '0')}</div>
            <div class="counter-label">Minutes</div>
        </div>
        <div class="counter-item">
            <div class="counter-number">${String(seconds).padStart(2, '0')}</div>
            <div class="counter-label">Seconds</div>
        </div>
    `;
}

/* ============================================
   VOICE NOTE
   ============================================ */
function initializeVoiceNote() {
    if (!CONFIG.voiceNoteUrl) {
        document.getElementById('voiceSection').style.display = 'none';
        return;
    }

    document.getElementById('voiceSection').style.display = 'block';
    const voicePlayer = document.getElementById('voicePlayer');
    const voiceAudio = document.getElementById('voiceAudio');

    voicePlayer.classList.add('active');
    voiceAudio.src = CONFIG.voiceNoteUrl;
}

/* ============================================
   SECRET MESSAGE
   ============================================ */
function initializeSecretMessage() {
    const secretBtn = document.getElementById('secretBtn');

    secretBtn.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1001;
            animation: fadeIn 0.5s ease;
        `;

        const messageBox = document.createElement('div');
        messageBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(244, 213, 169, 0.95) 0%, rgba(232, 180, 180, 0.95) 100%);
            padding: 3rem;
            border-radius: 15px;
            max-width: 600px;
            text-align: center;
            z-index: 1002;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            animation: popupAppear 0.6s ease-out;
            font-family: 'Noto Serif Bengali', serif;
        `;

        messageBox.innerHTML = `
            <p style="font-size: 1.3rem; color: #2c2c2c; line-height: 1.8;">
                ${CONFIG.finalMessage}
            </p>
            <button style="
                margin-top: 2rem;
                padding: 0.8rem 2rem;
                background: linear-gradient(135deg, #d4af8c 0%, #f4d5a9 100%);
                color: #0a0e27;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 20px rgba(212, 175, 140, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                আমি বুঝি ❤️
            </button>
        `;

        const closeBtn = messageBox.querySelector('button');
        closeBtn.addEventListener('click', () => {
            overlay.style.animation = 'fadeOut 0.5s ease';
            messageBox.style.animation = 'popupClose 0.5s ease-in';
            setTimeout(() => {
                overlay.remove();
                messageBox.remove();
            }, 500);
        });

        document.body.appendChild(overlay);
        document.body.appendChild(messageBox);

        if (!document.getElementById('animationStyles')) {
            const style = document.createElement('style');
            style.id = 'animationStyles';
            style.innerHTML = `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                @keyframes popupAppear {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
                @keyframes popupClose {
                    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                }
            `;
            document.head.appendChild(style);
        }
    });
}

/* ============================================
   MAGNETIC TEXT EFFECT
   ============================================ */
function initializeMagneticText() {
    const magneticTexts = document.querySelectorAll('.magnetic-text');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    magneticTexts.forEach(text => {
        text.addEventListener('mousemove', (e) => {
            const rect = text.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distX = e.clientX - centerX;
            const distY = e.clientY - centerY;

            const distance = Math.sqrt(distX * distX + distY * distY);
            const maxDistance = 100;

            if (distance < maxDistance) {
                const strength = 1 - distance / maxDistance;
                const moveX = (distX / distance) * strength * 15;
                const moveY = (distY / distance) * strength * 15;

                text.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });

        text.addEventListener('mouseleave', () => {
            text.style.transform = 'translate(0, 0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const importantTexts = document.querySelectorAll('h1, h2, h3');
        importantTexts.forEach(text => {
            if (text.textContent.includes('দুলু') || text.textContent.includes('Happy') || text.textContent.includes('Dinuu')) {
                text.classList.add('magnetic-text');
            }
        });
        initializeMagneticText();
    }, 100);
});
