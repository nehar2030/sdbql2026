// ================================================
// SDBQL 2026 - COMPTE À REBOURS COMPACT & TRADUCTION
// JavaScript pour la top-bar améliorée
// ================================================

(function() {
    'use strict';
    
    // ========================================
    // 1. COMPTE À REBOURS COMPACT
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
        
        // Si le compte à rebours est terminé
        if (distance < 0 && compactDisplay) {
            compactDisplay.textContent = "🎉 EN COURS !";
            clearInterval(compactCountdownInterval);
        }
    }
    
    // Démarrer le compte à rebours
    let compactCountdownInterval;
    if (document.getElementById('countdown-compact-display')) {
        updateCompactCountdown();
        compactCountdownInterval = setInterval(updateCompactCountdown, 1000);
    }
    
    // ========================================
    // 2. SÉLECTEUR DE LANGUE (NOUVEAU SYSTÈME DE BOUTONS)
    // ========================================
    // Le sélecteur de langue a été remplacé par des boutons simples:
    // - FR: lien vers index.html
    // - EN: lien vers index-en.html  
    // - AR: lien vers index-ar.html
    // Ce code JavaScript n'est plus nécessaire car les boutons
    // sont maintenant des liens directs HTML.
    
    // Ancien code (commenté):
    /*
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
            langToggle.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
                langToggle.classList.remove('active');
            }
        });
    }
    
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = selectedLang.toUpperCase();
            }
            langDropdown.classList.remove('active');
            langToggle.classList.remove('active');
            localStorage.setItem('sdbql-language', selectedLang);
        });
    });
    */
    
    // ========================================
    // 3. SYSTÈME DE TRADUCTION
    // ========================================
    
    const translations = {
        fr: {
            // Navigation
            'nav-home': 'Accueil',
            'nav-about': 'À propos',
            'nav-themes': 'Axes thématiques',
            'nav-history': 'SDBQL 2024',
            'nav-dates': 'Dates',
            'nav-venue': 'Lieu',
            'nav-contact': 'Contact',
            'nav-register': 'S\'inscrire',
            
            // Hero
            'hero-title': '2ème Congrès International sur le Développement Durable pour une Meilleure Qualité de Vie',
            'hero-subtitle': 'Ressources Naturelles au Service des ODD',
            'hero-date': '30 Septembre 2026',
            'hero-location': 'Tlemcen, Algérie',
            'hero-cta1': 'Soumettre un résumé',
            'hero-cta2': 'En savoir plus',
            
            // About
            'about-label': 'À propos du congrès',
            'about-title': 'Un événement international majeur',
            'about-desc': 'Le SDBQL 2026 réunit chercheurs, décideurs et acteurs du développement durable',
            
            // Committee
            'committee-label': 'Organisation',
            'committee-title': 'Comité d\'organisation',
            
            // Themes
            'themes-label': 'Axes du congrès',
            'themes-title': 'Axes thématiques',
            'themes-desc': 'Six axes clés pour bâtir ensemble un avenir durable',
            
            // Dates
            'dates-label': 'Calendrier',
            'dates-title': 'Dates importantes',
            'dates-desc': 'Ne manquez aucune échéance',
            
            // Sponsoring
            'sponsor-label': 'Partenariat',
            'sponsor-title': 'Sponsoring et Inscription',
            'sponsor-desc': 'Devenez partenaire privilégié de SDBQL 2026',
            
            // Venue
            'venue-label': 'Lieu du congrès',
            'venue-title': 'Université Abou Bekr Belkaid',
            'venue-subtitle': 'Tlemcen, Algérie',
            
            // Contact
            'contact-label': 'Contactez-nous',
            'contact-title': 'Restons en contact',
            
            // Footer
            'footer-links': 'Liens rapides',
            'footer-participate': 'Participation',
            'footer-newsletter': 'Newsletter',
            'footer-newsletter-desc': 'Restez informé des actualités'
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
            'nav-home': 'الرئيسية',
            'nav-about': 'حول',
            'nav-themes': 'المحاور',
            'nav-history': 'SDBQL 2024',
            'nav-dates': 'التواريخ',
            'nav-venue': 'المكان',
            'nav-contact': 'اتصل',
            'nav-register': 'التسجيل',
            
            // Hero
            'hero-title': 'المؤتمر الدولي الثاني حول التنمية المستدامة من أجل نوعية حياة أفضل',
            'hero-subtitle': 'الموارد الطبيعية في خدمة أهداف التنمية المستدامة',
            'hero-date': '30 سبتمبر 2026',
            'hero-location': 'تلمسان، الجزائر',
            'hero-cta1': 'تقديم ملخص',
            'hero-cta2': 'معرفة المزيد',
            
            // About
            'about-label': 'حول المؤتمر',
            'about-title': 'حدث دولي كبير',
            'about-desc': 'يجمع SDBQL 2026 الباحثين وصانعي السياسات والفاعلين في التنمية المستدامة',
            
            // Committee
            'committee-label': 'التنظيم',
            'committee-title': 'اللجنة التنظيمية',
            
            // Themes
            'themes-label': 'محاور المؤتمر',
            'themes-title': 'المحاور الموضوعية',
            'themes-desc': 'ستة محاور رئيسية لبناء مستقبل مستدام معًا',
            
            // Dates
            'dates-label': 'التقويم',
            'dates-title': 'التواريخ المهمة',
            'dates-desc': 'لا تفوت أي موعد نهائي',
            
            // Sponsoring
            'sponsor-label': 'الشراكة',
            'sponsor-title': 'الرعاية والتسجيل',
            'sponsor-desc': 'كن شريكًا مميزًا لـ SDBQL 2026',
            
            // Venue
            'venue-label': 'مكان المؤتمر',
            'venue-title': 'جامعة أبو بكر بلقايد',
            'venue-subtitle': 'تلمسان، الجزائر',
            
            // Contact
            'contact-label': 'اتصل بنا',
            'contact-title': 'ابق على تواصل',
            
            // Footer
            'footer-links': 'روابط سريعة',
            'footer-participate': 'المشاركة',
            'footer-newsletter': 'النشرة الإخبارية',
            'footer-newsletter-desc': 'ابق على اطلاع بالأخبار'
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
        
        // Traduire tous les éléments avec data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });
        
        console.log(`🌐 Langue changée: ${lang.toUpperCase()}`);
    }
    
    // Charger la langue sauvegardée au démarrage
    function initializeLanguage() {
        // Le nouveau système de boutons ne nécessite pas de JavaScript
        // Les liens directs vers les pages suffisent
        
        // Ce code est commenté car le nouveau système de boutons
        // ne nécessite pas de manipulation JavaScript
        /*
        const savedLang = localStorage.getItem('sdbql-language') || 'fr';
        
        // Mettre à jour l'affichage du bouton
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
        
        // Appliquer la traduction si ce n'est pas le français
        if (savedLang !== 'fr') {
            changeLanguage(savedLang);
        }
        */
    }
    
    // Initialiser la langue au chargement
    initializeLanguage();
    
    // ========================================
    // 4. CONSOLE MESSAGE
    // ========================================
    
    console.log('%c🌐 Système de traduction activé!', 'color: #00bfa5; font-size: 14px; font-weight: bold;');
    console.log('%c⏱️ Compte à rebours compact actif!', 'color: #2196f3; font-size: 14px; font-weight: bold;');
    
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
