// ===================================
// ICAIS 2026 - Script principal
// ===================================

// Navigation mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion des onglets du programme
const tabButtons = document.querySelectorAll('.tab-btn');
const scheduleDays = document.querySelectorAll('.schedule-day');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.getAttribute('data-day');
        
        // Retirer la classe active de tous les boutons et jours
        tabButtons.forEach(btn => btn.classList.remove('active'));
        scheduleDays.forEach(scheduleDay => scheduleDay.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué et au jour correspondant
        button.classList.add('active');
        document.getElementById(day).classList.add('active');
    });
});

// Animation au scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Appliquer l'animation aux éléments
const animatedElements = document.querySelectorAll(`
    .about-content,
    .date-card,
    .speaker-card,
    .schedule-item,
    .pricing-card,
    .venue-info,
    .contact-info
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
        const formData = new FormData(contactForm);
        
        // Afficher un message de succès
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        
        // Réinitialiser le formulaire
        contactForm.reset();
    });
}

// Gestion du formulaire newsletter
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            alert('Merci de vous être abonné à notre newsletter !');
            newsletterForm.reset();
        }
    });
}

// Animation des statistiques (compteur)
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

// Observer pour les statistiques
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Effet parallaxe sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Gestion des boutons d'inscription
const registrationButtons = document.querySelectorAll('.pricing-card .btn');

registrationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!button.closest('a')) {
            e.preventDefault();
            const cardTitle = button.closest('.pricing-card').querySelector('.pricing-title').textContent;
            alert(`Inscription au plan ${cardTitle} - Cette fonctionnalité sera bientôt disponible !`);
        }
    });
});

// Animation du scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// Lazy loading des images (si vous ajoutez des images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Effet de typing sur le titre (optionnel)
const initTypingEffect = () => {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        let charIndex = 0;
        setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (charIndex < text.length) {
                    line.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50);
        }, index * 800);
    });
};

// Activer l'effet de typing au chargement (optionnel - commenté par défaut)
// window.addEventListener('load', initTypingEffect);

// Gestion du mode sombre (optionnel - peut être ajouté)
const addDarkModeToggle = () => {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-accent);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        z-index: 999;
        transition: var(--transition);
    `;
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(darkModeToggle);
};

// Activer le mode sombre (optionnel - commenté par défaut)
// addDarkModeToggle();

// Performance: limiter les événements de scroll
let ticking = false;

const optimizedScroll = (callback) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
};

// Console log pour confirmer le chargement
console.log('🎉 ICAIS 2026 - Site web chargé avec succès !');

// Message de bienvenue dans la console
console.log(`
╔═══════════════════════════════════════╗
║   ICAIS 2026                          ║
║   International Conference on         ║
║   Artificial Intelligence & Society   ║
║                                       ║
║   15-17 Septembre 2026               ║
║   Paris, France                       ║
╚═══════════════════════════════════════╝
`);
