// ================================================
// SDBQL 2026 - AMÃ‰LIORATIONS JAVASCRIPT
// Mode sombre + Compte Ã  rebours
// ================================================

(function() {
    'use strict';
    
    // ========================================
    // 1. MODE SOMBRE
    // ========================================
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // VÃ©rifier la prÃ©fÃ©rence sauvegardÃ©e
    const darkModePreference = localStorage.getItem('darkMode');
    
    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
    }
    
    // Toggle du mode sombre
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Sauvegarder la prÃ©fÃ©rence
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
    
    // ========================================
    // 2. COMPTE Ã€ REBOURS
    // ========================================
    
    function updateCountdown() {
        // Date de l'Ã©vÃ©nement: 30 Septembre 2026
        const eventDate = new Date('2026-09-30T09:00:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Calcul des jours, heures, minutes, secondes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Mettre Ã  jour l'affichage
        const daysEl = document.getElementById('countdown-days');
        const hoursEl = document.getElementById('countdown-hours');
        const minutesEl = document.getElementById('countdown-minutes');
        const secondsEl = document.getElementById('countdown-seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        
        // Animation pulse sur les secondes
        if (secondsEl && secondsEl.parentElement) {
            secondsEl.parentElement.classList.add('pulse');
            setTimeout(() => {
                secondsEl.parentElement.classList.remove('pulse');
            }, 500);
        }
        
        // Si le compte Ã  rebours est terminÃ©
        if (distance < 0) {
            const countdownContainer = document.querySelector('.countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <div style="text-align: center; padding: 30px;">
                        <h3 style="color: white; margin-bottom: 10px;">ðŸŽ‰ L'Ã©vÃ©nement a commencÃ© !</h3>
                        <p style="color: rgba(255,255,255,0.9);">Bienvenue au SDBQL 2026</p>
                    </div>
                `;
            }
            clearInterval(countdownInterval);
        }
    }
    
    // Mettre Ã  jour le compte Ã  rebours toutes les secondes
    let countdownInterval;
    if (document.getElementById('countdown-days')) {
        updateCountdown(); // PremiÃ¨re mise Ã  jour immÃ©diate
        countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // ========================================
    // 3. DÃ‰TECTION PRÃ‰FÃ‰RENCE SYSTÃˆME
    // ========================================
    
    // DÃ©tecter la prÃ©fÃ©rence systÃ¨me de l'utilisateur (si pas de prÃ©fÃ©rence sauvegardÃ©e)
    if (!darkModePreference) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        }
    }
    
    // Ã‰couter les changements de prÃ©fÃ©rence systÃ¨me
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('darkMode')) {
                if (e.matches) {
                    body.classList.add('dark-mode');
                } else {
                    body.classList.remove('dark-mode');
                }
            }
        });
    }
    
    // ========================================
    // 4. CARTE INTERACTIVE - DIRECTIONS
    // ========================================
    
    const directionsButton = document.getElementById('getDirections');
    if (directionsButton) {
        directionsButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // CoordonnÃ©es de l'UniversitÃ© de Tlemcen
            const latitude = 34.8939;
            const longitude = -1.3150;
            
            // Ouvrir Google Maps avec les directions
            const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
            window.open(url, '_blank');
        });
    }
    
    // ========================================
    // 5. CONSOLE MESSAGE
    // ========================================
    
    console.log('%cðŸŒ SDBQL 2026 - AmÃ©liorations activÃ©es!', 'color: #00bfa5; font-size: 16px; font-weight: bold;');
    console.log('%câœ… Mode sombre disponible', 'color: #4caf50; font-size: 14px;');
    console.log('%câ±ï¸ Compte Ã  rebours actif', 'color: #2196f3; font-size: 14px;');
    console.log('%cðŸ—ºï¸ Carte interactive intÃ©grÃ©e', 'color: #ff9800; font-size: 14px;');
    
    // ========================================
    // 6. EXPORT API
    // ========================================
    
    window.SDBQL_Enhancements = {
        version: '1.0.0',
        toggleDarkMode: function() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
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
        },
        isDarkMode: function() {
            return body.classList.contains('dark-mode');
        }
    };
    
})();
