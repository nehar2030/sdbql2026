// ================================================
// GOOGLE TRANSLATE WIDGET - JavaScript personnalisé
// Widget de traduction Google élégant et fonctionnel
// ================================================

(function() {
    'use strict';
    
    // Configuration des langues disponibles
    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
    ];
    
    let currentLang = 'fr';
    
    // ========================================
    // CRÉATION DU WIDGET
    // ========================================
    
    function createGoogleTranslateWidget() {
        // Trouver le conteneur dans la top-bar
        const topBarRight = document.querySelector('.top-bar-right');
        
        if (!topBarRight) {
            console.error('Top-bar-right non trouvée');
            return;
        }
        
        // Créer le HTML du widget
        const widgetHTML = `
            <div class="google-translate-container">
                <button class="google-translate-btn" id="googleTranslateBtn">
                    <span class="translate-icon">🌐</span>
                    <span class="translate-text">Traduire</span>
                    <span class="current-lang-badge" id="currentLangBadge" style="display: none;"></span>
                </button>
                
                <div class="translate-panel" id="translatePanel">
                    <div class="translate-panel-header">
                        <h3 class="translate-panel-title">🌍 Choisir une langue</h3>
                        <button class="translate-close-btn" id="translateCloseBtn">×</button>
                    </div>
                    
                    <div class="translate-languages" id="translateLanguages">
                        ${languages.map(lang => `
                            <button class="translate-lang-btn" data-lang="${lang.code}">
                                <span class="flag-emoji">${lang.flag}</span>
                                <span>${lang.name}</span>
                            </button>
                        `).join('')}
                    </div>
                    
                    <div class="translate-powered">
                        Propulsé par Google Translate
                    </div>
                </div>
                
                <div class="translate-overlay" id="translateOverlay"></div>
            </div>
            
            <!-- Élément Google Translate caché -->
            <div id="google_translate_element" style="display: none;"></div>
        `;
        
        // Insérer avant le compte à rebours (ou au début)
        const countdown = topBarRight.querySelector('.countdown-compact');
        if (countdown) {
            countdown.insertAdjacentHTML('beforebegin', widgetHTML);
        } else {
            topBarRight.insertAdjacentHTML('afterbegin', widgetHTML);
        }
        
        // Initialiser les événements
        initializeEvents();
    }
    
    // ========================================
    // GESTION DES ÉVÉNEMENTS
    // ========================================
    
    function initializeEvents() {
        const btn = document.getElementById('googleTranslateBtn');
        const panel = document.getElementById('translatePanel');
        const closeBtn = document.getElementById('translateCloseBtn');
        const overlay = document.getElementById('translateOverlay');
        const langButtons = document.querySelectorAll('.translate-lang-btn');
        
        // Ouvrir/Fermer le panel
        if (btn) {
            btn.addEventListener('click', togglePanel);
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closePanel);
        }
        
        if (overlay) {
            overlay.addEventListener('click', closePanel);
        }
        
        // Sélection de langue
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                const langCode = this.getAttribute('data-lang');
                translatePage(langCode);
            });
        });
        
        // Fermer avec Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePanel();
            }
        });
    }
    
    function togglePanel() {
        const panel = document.getElementById('translatePanel');
        const overlay = document.getElementById('translateOverlay');
        
        if (panel && overlay) {
            const isActive = panel.classList.contains('active');
            
            if (isActive) {
                closePanel();
            } else {
                panel.classList.add('active');
                overlay.classList.add('active');
            }
        }
    }
    
    function closePanel() {
        const panel = document.getElementById('translatePanel');
        const overlay = document.getElementById('translateOverlay');
        
        if (panel) panel.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }
    
    // ========================================
    // TRADUCTION DE LA PAGE
    // ========================================
    
    function translatePage(langCode) {
        console.log(`🌐 Traduction vers: ${langCode}`);
        
        // Mettre à jour l'UI
        updateActiveLang(langCode);
        
        // Fermer le panel
        closePanel();
        
        // Utiliser l'API Google Translate
        const selectElement = document.querySelector('.goog-te-combo');
        
        if (selectElement) {
            selectElement.value = langCode;
            selectElement.dispatchEvent(new Event('change'));
            
            // Sauvegarder la préférence
            currentLang = langCode;
            localStorage.setItem('google-translate-lang', langCode);
            
            // Mettre à jour le badge
            updateLangBadge(langCode);
        } else {
            console.warn('Élément Google Translate non encore chargé, réessai...');
            setTimeout(() => translatePage(langCode), 500);
        }
    }
    
    function updateActiveLang(langCode) {
        const langButtons = document.querySelectorAll('.translate-lang-btn');
        
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === langCode) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    function updateLangBadge(langCode) {
        const badge = document.getElementById('currentLangBadge');
        
        if (badge && langCode !== 'fr') {
            badge.textContent = langCode.toUpperCase();
            badge.style.display = 'block';
        } else if (badge) {
            badge.style.display = 'none';
        }
    }
    
    // ========================================
    // RESTAURER LA LANGUE SAUVEGARDÉE
    // ========================================
    
    function restoreSavedLanguage() {
        const savedLang = localStorage.getItem('google-translate-lang');
        
        if (savedLang && savedLang !== 'fr') {
            setTimeout(() => {
                console.log(`🔄 Restauration de la langue: ${savedLang}`);
                translatePage(savedLang);
            }, 1500);
        }
    }
    
    // ========================================
    // MASQUER LA BARRE GOOGLE
    // ========================================
    
    function hideGoogleBar() {
        const bar = document.querySelector('.goog-te-banner-frame');
        if (bar) {
            bar.style.display = 'none';
        }
        
        // Réinitialiser le body
        document.body.style.top = '0';
        document.body.style.position = 'static';
    }
    
    // Vérifier périodiquement
    setInterval(hideGoogleBar, 100);
    
    // ========================================
    // INITIALISATION
    // ========================================
    
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('🌐 Initialisation Google Translate Widget...');
        
        // Créer le widget
        createGoogleTranslateWidget();
        
        // Attendre que Google Translate soit chargé
        setTimeout(() => {
            restoreSavedLanguage();
        }, 2000);
        
        console.log('✅ Google Translate Widget initialisé!');
    }
    
    // ========================================
    // API PUBLIQUE
    // ========================================
    
    window.SDBQL_Translate = {
        version: '1.0.0',
        setLanguage: translatePage,
        reset: function() {
            translatePage('fr');
            localStorage.removeItem('google-translate-lang');
        },
        getCurrentLang: function() {
            return currentLang;
        },
        toggle: togglePanel
    };
    
})();
