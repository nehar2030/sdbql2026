// ================================================
// SDBQL 2026 - GESTION DES FORMULAIRES GOOGLE APPS SCRIPT
// Soumission Newsletter et Contact vers Google Sheets
// ================================================

(function() {
    'use strict';
    
    // ========================================
    // CONFIGURATION - REMPLACEZ CETTE URL PAR VOTRE URL DE DÉPLOIEMENT
    // ========================================
    
    // URL UNIQUE pour Newsletter ET Contact (même script)
    const SCRIPT_URL = 'https://script.google.com/macros/...........................................'
    
    // Les deux formulaires utilisent la même URL
    const NEWSLETTER_SCRIPT_URL = SCRIPT_URL;
    const CONTACT_SCRIPT_URL = SCRIPT_URL;
    
    // ========================================
    // 1. FORMULAIRE NEWSLETTER
    // ========================================
    
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterStatus = document.getElementById('newsletterStatus');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Récupérer l'email
            const email = this.querySelector('input[name="email"]').value;
            
            // Désactiver le bouton pendant l'envoi
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '⏳';
            
            try {
                // Créer les données du formulaire avec URLSearchParams
                const params = new URLSearchParams();
                params.append('formType', 'newsletter');
                params.append('email', email);
                
                // Envoyer à Google Apps Script avec POST
                const response = await fetch(NEWSLETTER_SCRIPT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: params.toString(),
                    redirect: 'follow'
                });
                
                const result = await response.json();
                
                // Afficher le message de succès
                if (result.status === 'success') {
                    showNewsletterStatus('✅ ' + result.message, 'success');
                    newsletterForm.reset();
                } else {
                    showNewsletterStatus('❌ ' + result.message, 'error');
                }
                
            } catch (error) {
                console.error('Erreur Newsletter:', error);
                showNewsletterStatus('❌ Erreur de connexion. Vérifiez votre URL Google Apps Script.', 'error');
            } finally {
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
    
    function showNewsletterStatus(message, type) {
        newsletterStatus.textContent = message;
        newsletterStatus.style.display = 'block';
        newsletterStatus.style.color = type === 'success' ? '#4caf50' : '#f44336';
        
        // Masquer après 5 secondes
        setTimeout(() => {
            newsletterStatus.style.display = 'none';
        }, 5000);
    }
    
    // ========================================
    // 2. FORMULAIRE CONTACT
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Récupérer les données
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const subject = this.querySelector('input[name="subject"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            
            // Désactiver le bouton pendant l'envoi
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            try {
                // Créer les données du formulaire avec URLSearchParams
                const params = new URLSearchParams();
                params.append('formType', 'contact');
                params.append('name', name);
                params.append('email', email);
                params.append('subject', subject);
                params.append('message', message);
                
                // Envoyer à Google Apps Script avec POST
                const response = await fetch(CONTACT_SCRIPT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: params.toString(),
                    redirect: 'follow'
                });
                
                const result = await response.json();
                
                // Afficher le message
                if (result.status === 'success') {
                    showContactStatus(result.message, 'success');
                    contactForm.reset();
                } else {
                    showContactStatus(result.message, 'error');
                }
                
            } catch (error) {
                console.error('Erreur Contact:', error);
                showContactStatus('Erreur de connexion. Vérifiez votre URL Google Apps Script.', 'error');
            } finally {
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
    
    function showContactStatus(message, type) {
        contactStatus.textContent = message;
        contactStatus.style.display = 'block';
        contactStatus.style.backgroundColor = type === 'success' ? '#e8f5e9' : '#ffebee';
        contactStatus.style.color = type === 'success' ? '#2e7d32' : '#c62828';
        contactStatus.style.border = `1px solid ${type === 'success' ? '#4caf50' : '#f44336'}`;
        
        // Masquer après 7 secondes
        setTimeout(() => {
            contactStatus.style.display = 'none';
        }, 7000);
    }
    
    // ========================================
    // 3. CONSOLE MESSAGE
    // ========================================
    
    console.log('%c📧 Formulaires Google Apps Script activés!', 'color: #00bfa5; font-size: 14px; font-weight: bold;');
    console.log('%c✅ Newsletter connectée', 'color: #4caf50; font-size: 12px;');
    console.log('%c✅ Contact connecté', 'color: #4caf50; font-size: 12px;');
    console.log('%c⚠️ N\'oubliez pas de remplacer les URLs dans forms-handler.js', 'color: #ff9800; font-size: 12px;');
    
})();
