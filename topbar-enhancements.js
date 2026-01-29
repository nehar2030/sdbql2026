// ================================================
// SDBQL 2026 - COMPTE Ã€ REBOURS COMPACT & TRADUCTION
// JavaScript pour la top-bar amÃ©liorÃ©e
// ================================================

(function() {
    'use strict';
    
    // ========================================
    // 1. COMPTE Ã€ REBOURS COMPACT
    // ========================================
    
    function updateCompactCountdown() {
        const eventDate = new Date('2026-09-30T09:00:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const compactDisplay = document.getElementById('countdown-compact-display');
        
        if (compactDisplay) {
            // Format: 000J 00:00:00
            compactDisplay.textContent = 
                `${String(days).padStart(3, '0')}J ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        
        // Si le compte Ã  rebours est terminÃ©
        if (distance < 0 && compactDisplay) {
            compactDisplay.textContent = "ðŸŽ‰ EN COURS !";
            clearInterval(compactCountdownInterval);
        }
    }
    
    // DÃ©marrer le compte Ã  rebours
    let compactCountdownInterval;
    if (document.getElementById('countdown-compact-display')) {
        updateCompactCountdown();
        compactCountdownInterval = setInterval(updateCompactCountdown, 1000);
    }
    
    // ========================================
    // 2. SÃ‰LECTEUR DE LANGUE
    // ========================================
    
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Toggle du dropdown
    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
            langToggle.classList.toggle('active');
        });
        
        // Fermer le dropdown en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
                langToggle.classList.remove('active');
            }
        });
    }
    
    // Changement de langue
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
            
            // Mettre Ã  jour l'affichage
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Mettre Ã  jour le bouton
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = selectedLang.toUpperCase();
            }
            
            // Fermer le dropdown
            langDropdown.classList.remove('active');
            langToggle.classList.remove('active');
            
            // Sauvegarder la prÃ©fÃ©rence
            localStorage.setItem('sdbql-language', selectedLang);
        });
    });
    
    // ========================================
    // 3. SYSTÃˆME DE TRADUCTION
    // ========================================
    
    const translations = {
        fr: {
            // Navigation
            'nav-home': 'Accueil',
            'nav-about': 'Ã€ propos',
            'nav-themes': 'Axes thÃ©matiques',
            'nav-history': 'SDBQL 2024',
            'nav-dates': 'Dates',
            'nav-venue': 'Lieu',
            'nav-contact': 'Contact',
            'nav-register': 'S\'inscrire',
            
            // Hero
            'hero-title': '2Ã¨me CongrÃ¨s International sur le DÃ©veloppement Durable pour une Meilleure QualitÃ© de Vie',
            'hero-subtitle': 'Ressources Naturelles au Service des ODD',
            'hero-date': '30 Septembre 2026',
            'hero-location': 'Tlemcen, AlgÃ©rie',
            'hero-cta1': 'Soumettre un rÃ©sumÃ©',
            'hero-cta2': 'En savoir plus',
            
            // About
            'about-label': 'Ã€ propos du congrÃ¨s',
            'about-title': 'Un Ã©vÃ©nement international majeur',
            'about-desc': 'Le SDBQL 2026 rÃ©unit chercheurs, dÃ©cideurs et acteurs du dÃ©veloppement durable',
            
            // Committee
            'committee-label': 'Organisation',
            'committee-title': 'ComitÃ© d\'organisation',
            
            // Themes
            'themes-label': 'Axes du congrÃ¨s',
            'themes-title': 'Axes thÃ©matiques',
            'themes-desc': 'Six axes clÃ©s pour bÃ¢tir ensemble un avenir durable',
            
            // Dates
            'dates-label': 'Calendrier',
            'dates-title': 'Dates importantes',
            'dates-desc': 'Ne manquez aucune Ã©chÃ©ance',
            
            // Sponsoring
            'sponsor-label': 'Partenariat',
            'sponsor-title': 'Sponsoring et Inscription',
            'sponsor-desc': 'Devenez partenaire privilÃ©giÃ© de SDBQL 2026',
            
            // Venue
            'venue-label': 'Lieu du congrÃ¨s',
            'venue-title': 'UniversitÃ© Abou Bekr Belkaid',
            'venue-subtitle': 'Tlemcen, AlgÃ©rie',
            
            // Contact
            'contact-label': 'Contactez-nous',
            'contact-title': 'Restons en contact',
            
            // Footer
            'footer-links': 'Liens rapides',
            'footer-participate': 'Participation',
            'footer-newsletter': 'Newsletter',
            'footer-newsletter-desc': 'Restez informÃ© des actualitÃ©s'
        },
        
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-themes': 'Themes',
            'nav-history': 'SDBQL 2024',
            'nav-dates': 'Dates',
            'nav-venue': 'Venue',
            'nav-contact': 'Contact',
            'nav-register': 'Register',
            
            // Hero
            'hero-title': '2nd International Congress on Sustainable Development for a Better Quality of Life',
            'hero-subtitle': 'Natural Resources for the SDGs',
            'hero-date': 'September 30, 2026',
            'hero-location': 'Tlemcen, Algeria',
            'hero-cta1': 'Submit an abstract',
            'hero-cta2': 'Learn more',
            
            // About
            'about-label': 'About the congress',
            'about-title': 'A major international event',
            'about-desc': 'SDBQL 2026 brings together researchers, policy makers and sustainable development actors',
            
            // Committee
            'committee-label': 'Organization',
            'committee-title': 'Organizing Committee',
            
            // Themes
            'themes-label': 'Congress themes',
            'themes-title': 'Thematic areas',
            'themes-desc': 'Six key areas to build a sustainable future together',
            
            // Dates
            'dates-label': 'Schedule',
            'dates-title': 'Important dates',
            'dates-desc': 'Don\'t miss any deadline',
            
            // Sponsoring
            'sponsor-label': 'Partnership',
            'sponsor-title': 'Sponsorship and Registration',
            'sponsor-desc': 'Become a privileged partner of SDBQL 2026',
            
            // Venue
            'venue-label': 'Congress venue',
            'venue-title': 'Abou Bekr Belkaid University',
            'venue-subtitle': 'Tlemcen, Algeria',
            
            // Contact
            'contact-label': 'Contact us',
            'contact-title': 'Get in touch',
            
            // Footer
            'footer-links': 'Quick links',
            'footer-participate': 'Participation',
            'footer-newsletter': 'Newsletter',
            'footer-newsletter-desc': 'Stay informed of the news'
        },
        
        ar: {
            // Navigation
            'nav-home': 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
            'nav-about': 'Ø­ÙˆÙ„',
            'nav-themes': 'Ø§Ù„Ù…Ø­Ø§ÙˆØ±',
            'nav-history': 'SDBQL 2024',
            'nav-dates': 'Ø§Ù„ØªÙˆØ§Ø±ÙŠØ®',
            'nav-venue': 'Ø§Ù„Ù…ÙƒØ§Ù†',
            'nav-contact': 'Ø§ØªØµÙ„',
            'nav-register': 'Ø§Ù„ØªØ³Ø¬ÙŠÙ„',
            
            // Hero
            'hero-title': 'Ø§Ù„Ù…Ø¤ØªÙ…Ø± Ø§Ù„Ø¯ÙˆÙ„ÙŠ Ø§Ù„Ø«Ø§Ù†ÙŠ Ø­ÙˆÙ„ Ø§Ù„ØªÙ†Ù…ÙŠØ© Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù…Ø© Ù…Ù† Ø£Ø¬Ù„ Ù†ÙˆØ¹ÙŠØ© Ø­ÙŠØ§Ø© Ø£ÙØ¶Ù„',
            'hero-subtitle': 'Ø§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ© ÙÙŠ Ø®Ø¯Ù…Ø© Ø£Ù‡Ø¯Ø§Ù Ø§Ù„ØªÙ†Ù…ÙŠØ© Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù…Ø©',
            'hero-date': '30 Ø³Ø¨ØªÙ…Ø¨Ø± 2026',
            'hero-location': 'ØªÙ„Ù…Ø³Ø§Ù†ØŒ Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±',
            'hero-cta1': 'ØªÙ‚Ø¯ÙŠÙ… Ù…Ù„Ø®Øµ',
            'hero-cta2': 'Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…Ø²ÙŠØ¯',
            
            // About
            'about-label': 'Ø­ÙˆÙ„ Ø§Ù„Ù…Ø¤ØªÙ…Ø±',
            'about-title': 'Ø­Ø¯Ø« Ø¯ÙˆÙ„ÙŠ ÙƒØ¨ÙŠØ±',
            'about-desc': 'ÙŠØ¬Ù…Ø¹ SDBQL 2026 Ø§Ù„Ø¨Ø§Ø­Ø«ÙŠÙ† ÙˆØµØ§Ù†Ø¹ÙŠ Ø§Ù„Ø³ÙŠØ§Ø³Ø§Øª ÙˆØ§Ù„ÙØ§Ø¹Ù„ÙŠÙ† ÙÙŠ Ø§Ù„ØªÙ†Ù…ÙŠØ© Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù…Ø©',
            
            // Committee
            'committee-label': 'Ø§Ù„ØªÙ†Ø¸ÙŠÙ…',
            'committee-title': 'Ø§Ù„Ù„Ø¬Ù†Ø© Ø§Ù„ØªÙ†Ø¸ÙŠÙ…ÙŠØ©',
            
            // Themes
            'themes-label': 'Ù…Ø­Ø§ÙˆØ± Ø§Ù„Ù…Ø¤ØªÙ…Ø±',
            'themes-title': 'Ø§Ù„Ù…Ø­Ø§ÙˆØ± Ø§Ù„Ù…ÙˆØ¶ÙˆØ¹ÙŠØ©',
            'themes-desc': 'Ø³ØªØ© Ù…Ø­Ø§ÙˆØ± Ø±Ø¦ÙŠØ³ÙŠØ© Ù„Ø¨Ù†Ø§Ø¡ Ù…Ø³ØªÙ‚Ø¨Ù„ Ù…Ø³ØªØ¯Ø§Ù… Ù…Ø¹Ù‹Ø§',
            
            // Dates
            'dates-label': 'Ø§Ù„ØªÙ‚ÙˆÙŠÙ…',
            'dates-title': 'Ø§Ù„ØªÙˆØ§Ø±ÙŠØ® Ø§Ù„Ù…Ù‡Ù…Ø©',
            'dates-desc': 'Ù„Ø§ ØªÙÙˆØª Ø£ÙŠ Ù…ÙˆØ¹Ø¯ Ù†Ù‡Ø§Ø¦ÙŠ',
            
            // Sponsoring
            'sponsor-label': 'Ø§Ù„Ø´Ø±Ø§ÙƒØ©',
            'sponsor-title': 'Ø§Ù„Ø±Ø¹Ø§ÙŠØ© ÙˆØ§Ù„ØªØ³Ø¬ÙŠÙ„',
            'sponsor-desc': 'ÙƒÙ† Ø´Ø±ÙŠÙƒÙ‹Ø§ Ù…Ù…ÙŠØ²Ù‹Ø§ Ù„Ù€ SDBQL 2026',
            
            // Venue
            'venue-label': 'Ù…ÙƒØ§Ù† Ø§Ù„Ù…Ø¤ØªÙ…Ø±',
            'venue-title': 'Ø¬Ø§Ù…Ø¹Ø© Ø£Ø¨Ùˆ Ø¨ÙƒØ± Ø¨Ù„Ù‚Ø§ÙŠØ¯',
            'venue-subtitle': 'ØªÙ„Ù…Ø³Ø§Ù†ØŒ Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±',
            
            // Contact
            'contact-label': 'Ø§ØªØµÙ„ Ø¨Ù†Ø§',
            'contact-title': 'Ø§Ø¨Ù‚ Ø¹Ù„Ù‰ ØªÙˆØ§ØµÙ„',
            
            // Footer
            'footer-links': 'Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©',
            'footer-participate': 'Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ©',
            'footer-newsletter': 'Ø§Ù„Ù†Ø´Ø±Ø© Ø§Ù„Ø¥Ø®Ø¨Ø§Ø±ÙŠØ©',
            'footer-newsletter-desc': 'Ø§Ø¨Ù‚ Ø¹Ù„Ù‰ Ø§Ø·Ù„Ø§Ø¹ Ø¨Ø§Ù„Ø£Ø®Ø¨Ø§Ø±'
        }
    };
    
    function changeLanguage(lang) {
        const currentTranslations = translations[lang];
        
        if (!currentTranslations) {
            console.error('Language not supported:', lang);
            return;
        }
        
        // Changer l'attribut lang du HTML
        document.documentElement.setAttribute('lang', lang);
        
        // Traduire tous les Ã©lÃ©ments avec data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });
        
        console.log(`ðŸŒ Langue changÃ©e: ${lang.toUpperCase()}`);
    }
    
    // Charger la langue sauvegardÃ©e au dÃ©marrage
    function initializeLanguage() {
        const savedLang = localStorage.getItem('sdbql-language') || 'fr';
        
        // Mettre Ã  jour l'affichage du bouton
        const langText = langToggle?.querySelector('.lang-text');
        if (langText) {
            langText.textContent = savedLang.toUpperCase();
        }
        
        // Activer l'option correspondante
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === savedLang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        
        // Appliquer la traduction si ce n'est pas le franÃ§ais
        if (savedLang !== 'fr') {
            changeLanguage(savedLang);
        }
    }
    
    // Initialiser la langue au chargement
    initializeLanguage();
    
    // ========================================
    // 4. CONSOLE MESSAGE
    // ========================================
    
    console.log('%cðŸŒ SystÃ¨me de traduction activÃ©!', 'color: #00bfa5; font-size: 14px; font-weight: bold;');
    console.log('%câ±ï¸ Compte Ã  rebours compact actif!', 'color: #2196f3; font-size: 14px; font-weight: bold;');
    
    // ========================================
    // 5. EXPORT API
    // ========================================
    
    window.SDBQL_TopBar = {
        version: '1.0.0',
        changeLanguage: changeLanguage,
        getCurrentLanguage: function() {
            return localStorage.getItem('sdbql-language') || 'fr';
        },
        getCountdown: function() {
            const eventDate = new Date('2026-09-30T09:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;
            
            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            };
        }
    };
    
})();
