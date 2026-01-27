// ===================================
// SDBQL 2026 - Modern Academic Script
// ===================================

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Smooth Scroll
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

// Intersection Observer for Animations
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

// Apply animation to elements
const animatedElements = document.querySelectorAll(`
    .welcome-content,
    .welcome-image,
    .committee-box,
    .theme-box,
    .history-stat-box,
    .highlight-box,
    .timeline-item,
    .pricing-box,
    .venue-info,
    .venue-images,
    .contact-info-box,
    .contact-form-box
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter Animation
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');
    
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

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number, .history-stat-box h3');
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

// Observe stat elements
const statElements = document.querySelectorAll('.welcome-stats, .history-stats-grid');
statElements.forEach(el => statsObserver.observe(el));

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter Form Handler
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        
        if (emailInput.value) {
            console.log('Newsletter subscription:', emailInput.value);
            alert('Merci de vous être abonné à notre newsletter !');
            form.reset();
        }
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Parallax Effect on Hero
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-slider');
            
            if (hero && scrolled < window.innerHeight) {
                const slideContent = hero.querySelector('.slide-content');
                if (slideContent) {
                    const translateY = scrolled * 0.3;
                    const opacity = 1 - (scrolled / (window.innerHeight * 0.8));
                    slideContent.style.transform = `translateY(${translateY}px)`;
                    slideContent.style.opacity = Math.max(0, opacity);
                }
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    timelineObserver.observe(item);
});

// Add hover effects to pricing boxes
const pricingBoxes = document.querySelectorAll('.pricing-box');

pricingBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Theme boxes hover effect
const themeBoxes = document.querySelectorAll('.theme-box');

themeBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        const number = this.querySelector('.theme-number');
        if (number) {
            number.style.color = 'var(--color-primary)';
            number.style.opacity = '0.2';
        }
    });
    
    box.addEventListener('mouseleave', function() {
        const number = this.querySelector('.theme-number');
        if (number) {
            number.style.color = '';
            number.style.opacity = '';
        }
    });
});

// Scroll to top functionality (optional)
let scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.background = 'var(--color-primary-dark)';
    this.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.background = 'var(--color-primary)';
    this.style.transform = 'translateY(0)';
});

// Form validation enhancement
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.style.borderColor = '#e53935';
    });
    
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = 'var(--color-border)';
        }
    });
});

// Performance: Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized');
        // Add any resize logic here
    }, 250);
});

// Print welcome message
console.log(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║   🌱 SDBQL 2026                                        ║
║   Développement Durable pour une                       ║
║   Meilleure Qualité de Vie                            ║
║                                                        ║
║   📅 30 Septembre 2026                                 ║
║   📍 Université de Tlemcen, Algérie                    ║
║                                                        ║
║   🌍 Ressources Naturelles au Service des ODD         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
`);

console.log('✅ Site web chargé avec succès !');
console.log('🎨 Design: Modern Academic Template');
console.log('📧 Contact: benameurnehar@gmail.com');

// Export for debugging (optional)
window.SDBQL = {
    version: '2.0.0',
    theme: 'modern-academic',
    year: 2026,
    contact: 'benameurnehar@gmail.com'
};
