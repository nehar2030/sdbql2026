# ICAIS 2026 - Site Web de Conférence Internationale

Site web moderne et professionnel pour une conférence internationale universitaire sur l'Intelligence Artificielle et la Société.

## 🎨 Caractéristiques

- **Design moderne et distinctif** avec typographie élégante (Playfair Display + Work Sans)
- **Entièrement responsive** - fonctionne parfaitement sur mobile, tablette et desktop
- **Animations fluides** et transitions élégantes
- **Navigation intuitive** avec menu mobile
- **Sections complètes** :
  - Accueil avec hero section impactant
  - À propos de la conférence
  - Dates importantes
  - Conférenciers invités
  - Programme détaillé avec onglets
  - Tarifs et inscription
  - Lieu et hébergement
  - Formulaire de contact
  - Footer avec newsletter

## 📁 Structure des fichiers

```
conference-site/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript interactif
└── README.md          # Ce fichier
```

## 🚀 Déploiement sur Netlify

### Méthode 1 : Drag & Drop (Plus simple)

1. Allez sur [https://app.netlify.com](https://app.netlify.com)
2. Connectez-vous ou créez un compte gratuit
3. Cliquez sur "Add new site" → "Deploy manually"
4. Glissez-déposez le dossier `conference-site` complet dans la zone
5. Attendez quelques secondes - votre site est en ligne ! ✨

### Méthode 2 : Via GitHub

1. Créez un nouveau repository sur GitHub
2. Uploadez tous les fichiers du dossier `conference-site`
3. Sur Netlify, cliquez sur "Add new site" → "Import an existing project"
4. Sélectionnez GitHub et choisissez votre repository
5. Cliquez sur "Deploy site"

### Méthode 3 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer le site
cd conference-site
netlify deploy --prod
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `styles.css` (lignes 7-15) :

```css
:root {
    --color-primary: #1a1a2e;      /* Couleur principale */
    --color-accent: #e94560;        /* Couleur d'accentuation */
    --color-gold: #d4af37;          /* Couleur or */
    /* ... */
}
```

### Modifier le contenu

Tout le contenu est dans `index.html`. Recherchez les sections par leur ID :
- `#home` - Hero section
- `#about` - À propos
- `#speakers` - Conférenciers
- `#schedule` - Programme
- `#registration` - Inscription
- `#venue` - Lieu
- `#contact` - Contact

### Ajouter des images

1. Créez un dossier `images/` dans le dossier principal
2. Ajoutez vos images
3. Référencez-les dans le HTML : `<img src="images/nom-image.jpg" alt="Description">`

Pour les photos des conférenciers, remplacez les placeholders :
```html
<div class="speaker-image">
    <img src="images/speaker1.jpg" alt="Dr. Sarah Chen">
</div>
```

## 🔧 Fonctionnalités JavaScript

- Navigation mobile responsive
- Effet de scroll sur la navbar
- Onglets dynamiques pour le programme
- Animations au scroll (Intersection Observer)
- Effet parallaxe sur le hero
- Compteurs animés pour les statistiques
- Formulaires interactifs

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Mobile iOS et Android
- ✅ Tablettes
- ✅ Responsive à partir de 320px de largeur

## 🌐 Configuration du domaine personnalisé

Une fois déployé sur Netlify :

1. Allez dans "Site settings" → "Domain management"
2. Cliquez sur "Add custom domain"
3. Entrez votre nom de domaine (ex: icais2026.org)
4. Suivez les instructions pour configurer les DNS

## 📧 Configuration du formulaire de contact

Par défaut, le formulaire affiche une alerte. Pour le rendre fonctionnel :

### Option 1 : Utiliser Netlify Forms (Recommandé)

Ajoutez l'attribut `netlify` au formulaire dans `index.html` :

```html
<form class="contact-form" id="contactForm" netlify>
    <!-- champs du formulaire -->
</form>
```

### Option 2 : Intégrer un service externe

- **Formspree** : https://formspree.io
- **EmailJS** : https://www.emailjs.com
- **GetForm** : https://getform.io

## 🎯 Optimisations SEO

Le site inclut déjà :
- Balises meta description
- Structure HTML sémantique
- Titres hiérarchisés (h1, h2, h3)
- Attributs alt sur les images (à compléter)

Pour améliorer le SEO :
1. Ajoutez un fichier `robots.txt`
2. Créez un `sitemap.xml`
3. Ajoutez Google Analytics
4. Optimisez les images (compression)

## 📊 Performance

Le site est optimisé pour :
- ⚡ Chargement rapide (pas de bibliothèques lourdes)
- 🎨 CSS vanilla (pas de framework)
- 📱 Mobile-first
- ♿ Accessibilité de base

## 🔒 Sécurité

- Pas de dépendances externes (sauf Google Fonts)
- Formulaires protégés contre les injections
- HTTPS automatique avec Netlify

## 📝 Licence

Ce template est libre d'utilisation pour votre conférence universitaire.

## 🆘 Support

Pour toute question ou problème :
- Consultez la documentation Netlify : https://docs.netlify.com
- Vérifiez la console du navigateur pour les erreurs JavaScript
- Testez la validation HTML : https://validator.w3.org

## 🎉 Prochaines étapes

1. ✅ Déployez le site sur Netlify
2. 📝 Personnalisez le contenu (dates, noms, descriptions)
3. 🎨 Ajoutez vos images
4. 📧 Configurez le formulaire de contact
5. 🌐 Connectez votre domaine personnalisé
6. 📊 Ajoutez Google Analytics (optionnel)
7. 🚀 Partagez votre site !

---

**Développé avec ❤️ pour ICAIS 2026**
