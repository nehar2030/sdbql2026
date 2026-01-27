// ===================================
// SDBQL 2026 - Script principal
// Développement Durable pour une Meilleure Qualité de Vie
// ===================================

// Navigation mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
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
}

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
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation au scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Appliquer l'animation aux éléments
const animatedElements = document.querySelectorAll(`
    .about-content,
    .theme-card,
    .date-card,
    .history-stat,
    .highlight-item,
    .pricing-card,
    .venue-info,
    .contact-info,
    .partner-logo
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
        
        // Récupération des données
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
        console.log('Formulaire soumis:', { name, email, subject, message });
        
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
            console.log('Inscription newsletter:', emailInput.value);
            alert('Merci de vous être abonné à notre newsletter ! Vous recevrez bientôt des actualités sur SDBQL 2026.');
            newsletterForm.reset();
        }
    });
}

// Animation des statistiques (compteur)
const animateCounter = (element, target, duration = 2000, suffix = '+') => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
};

// Observer pour les statistiques de la section About
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const match = text.match(/(\d+)/);
                if (match) {
                    const target = parseInt(match[1]);
                    animateCounter(stat, target);
                }
            });
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Observer pour les statistiques de l'historique
const historyStats = document.querySelectorAll('.history-stat');
historyStats.forEach(stat => {
    statsObserver.observe(stat.closest('.history-stats') || stat);
});

// Effet parallaxe sur le hero
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                const translateY = scrolled * 0.4;
                const opacity = 1 - (scrolled / (window.innerHeight * 0.8));
                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = Math.max(0, opacity);
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// Animation du scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    });
}

// Gestion des boutons de sponsoring
const sponsorButtons = document.querySelectorAll('.pricing-card .btn');

sponsorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const cardTitle = button.closest('.pricing-card')?.querySelector('.pricing-title')?.textContent;
        
        // Si c'est un lien href="#contact", laisser le comportement par défaut
        if (button.getAttribute('href') === '#contact') {
            return;
        }
        
        // Sinon, afficher une alerte
        if (!button.closest('a[href^="http"]')) {
            e.preventDefault();
            alert(`Intéressé par le plan ${cardTitle || 'Sponsoring'} ? Contactez-nous pour plus d'informations !`);
        }
    });
});

// Lazy loading des images (si vous ajoutez des images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Animation des éléments flottants
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach((element, index) => {
    // Animation aléatoire pour chaque élément
    const randomDelay = Math.random() * 2;
    const randomDuration = 5 + Math.random() * 3;
    
    element.style.animationDelay = `${randomDelay}s`;
    element.style.animationDuration = `${randomDuration}s`;
});

// Fonction pour créer des particules naturelles (optionnel)
const createNatureParticles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particles = ['🍃', '🌿', '🌱'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'nature-particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -50px;
            font-size: ${Math.random() * 20 + 15}px;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: fallDown ${Math.random() * 5 + 5}s linear;
            pointer-events: none;
        `;
        
        hero.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }, 3000);
};

// Ajouter l'animation CSS pour les particules
const addParticleAnimation = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fallDown {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

// Activer les particules (optionnel - décommenter pour activer)
// addParticleAnimation();
// createNatureParticles();

// Détection du mode sombre système (optionnel)
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const updateTheme = (e) => {
    if (e.matches) {
        console.log('Mode sombre détecté');
        // Vous pouvez ajouter une logique pour un thème sombre ici
    } else {
        console.log('Mode clair détecté');
    }
};

prefersDarkScheme.addEventListener('change', updateTheme);

// Sauvegarde de la position de scroll lors du rechargement
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
});

// Restauration de la position de scroll
window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

// Gestion des tooltips (pour une amélioration future)
const addTooltips = () => {
    const elementsWithTitle = document.querySelectorAll('[title]');
    
    elementsWithTitle.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = element.getAttribute('title');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--color-dark);
                color: var(--color-white);
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.875rem;
                pointer-events: none;
                z-index: 10000;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + window.pageYOffset + 'px';
            
            element._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', () => {
            if (element._tooltip) {
                element._tooltip.remove();
                delete element._tooltip;
            }
        });
    });
};

// Performance: Débounce pour le resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Fenêtre redimensionnée');
        // Ajoutez ici toute logique nécessaire lors du redimensionnement
    }, 250);
});

// Log de chargement
console.log(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║   🌱 SDBQL 2026                                    ║
║   Développement Durable pour une                   ║
║   Meilleure Qualité de Vie                         ║
║                                                    ║
║   📅 30 Septembre 2026                             ║
║   📍 Université de Tlemcen, Algérie                ║
║                                                    ║
║   🌍 Ressources Naturelles au Service des ODD     ║
║                                                    ║
╚════════════════════════════════════════════════════╝
`);

console.log('✅ Site web chargé avec succès !');
console.log('🌿 Thème: Nature et Environnement');
console.log('📧 Contact: benameurnehar@gmail.com');

// Message de bienvenue pour les développeurs
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c👨‍💻 Mode développement activé', 'color: #7cb342; font-size: 14px; font-weight: bold;');
}

// Fonction d'export pour les tests (optionnel)
window.SDBQL2026 = {
    version: '2.0.0',
    date: '2026',
    contact: 'benameurnehar@gmail.com',
    website: 'https://sdbql2024tlemcen.wixsite.com/main'
};
