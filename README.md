# SDBQL 2026 - Site Web du Congrès International

Site web moderne et professionnel pour le 2ème Congrès International sur le Développement Durable pour une Meilleure Qualité de Vie.

## 🌱 À propos du congrès

**SDBQL 2026** (Sustainable Development for a Better Quality of Life) est un événement transdisciplinaire organisé par l'Université Abou Bekr Belkaid de Tlemcen qui réunit experts, chercheurs et acteurs du terrain autour des Objectifs de Développement Durable (ODD).

**Date:** 30 Septembre 2026  
**Lieu:** Université Abou Bekr Belkaid, Tlemcen, Algérie  
**Format:** Hybride (présentiel et en ligne)

## 🎨 Caractéristiques du site

- **Design inspiré par la nature** avec palette de couleurs environnementales (verts, bleus)
- **Entièrement responsive** - adapté aux mobiles, tablettes et ordinateurs
- **Animations fluides** et transitions élégantes
- **Navigation intuitive** avec menu mobile
- **Sections complètes** :
  - ✅ Accueil avec hero section impactant
  - ✅ À propos du congrès et comité d'organisation
  - ✅ 6 axes thématiques détaillés
  - ✅ Historique SDBQL 2024 (première édition)
  - ✅ Dates importantes (timeline)
  - ✅ Sponsoring et partenariat (3 niveaux)
  - ✅ Lieu et informations pratiques
  - ✅ Formulaire de contact
  - ✅ Footer avec newsletter

## 📁 Structure des fichiers

```
sdbql2026/
├── index.html          # Page principale
├── styles.css          # Styles CSS (thème nature)
├── script.js           # JavaScript interactif
└── README.md           # Ce fichier
```

## 🌍 Axes thématiques du congrès

1. **Agriculture Durable et Sécurité Alimentaire** 🌾
2. **Bioénergie et Énergies Renouvelables** ⚡
3. **Biodiversité, Gestion des Milieux Aquatiques et Terrestres** 🦋
4. **Action pour le Climat et Changement Climatique** 🌍
5. **Santé et Bien-être** 💚
6. **Partenariats Socio-économiques pour le Développement Durable** 🤝

## 🚀 Déploiement rapide

### Option 1 : Netlify (Recommandé)

1. Créez un compte sur [Netlify](https://app.netlify.com)
2. Cliquez sur "Add new site" → "Deploy manually"
3. Glissez-déposez le dossier `sdbql2026` complet
4. Votre site est en ligne en quelques secondes ! 🎉

### Option 2 : GitHub Pages

1. Créez un repository GitHub
2. Uploadez tous les fichiers
3. Activez GitHub Pages dans les paramètres du repository
4. Votre site sera accessible à : `https://votre-username.github.io/nom-repo`

### Option 3 : Hébergement traditionnel

1. Téléchargez tous les fichiers via FTP
2. Placez-les dans le dossier public_html ou www de votre serveur
3. Accédez à votre domaine

## 🎨 Palette de couleurs

Le site utilise une palette inspirée par la nature et l'environnement :

```css
--color-primary: #2d5016      /* Vert foncé forêt */
--color-secondary: #4a7c39    /* Vert moyen */
--color-accent: #7cb342       /* Vert clair vif */
--color-sky: #4a90e2          /* Bleu ciel */
--color-water: #0288d1        /* Bleu eau */
--color-leaf: #a5d6a7         /* Vert feuille claire */
--color-sun: #ffd54f          /* Jaune soleil */
```

## 🛠️ Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `styles.css` (lignes 7-27) pour adapter la palette à vos préférences.

### Modifier le contenu

Tout le contenu est dans `index.html`. Les sections sont clairement identifiées :
- `#home` - Section d'accueil
- `#about` - À propos du congrès
- `#themes` - Axes thématiques
- `#history` - Historique SDBQL 2024
- `#dates` - Dates importantes
- `#registration` - Sponsoring et inscription
- `#venue` - Lieu du congrès
- `#contact` - Contact

### Ajouter des images

1. Créez un dossier `images/` dans le dossier principal
2. Ajoutez vos images (format recommandé : JPG/PNG optimisées)
3. Remplacez les placeholders dans le HTML :

```html
<!-- Exemple pour la section venue -->
<img src="images/universite-tlemcen.jpg" alt="Université de Tlemcen">
```

## 📧 Configuration du formulaire de contact

### Avec Netlify Forms (Recommandé)

Ajoutez simplement l'attribut `netlify` au formulaire :

```html
<form class="contact-form" id="contactForm" netlify>
    <!-- champs du formulaire -->
</form>
```

### Avec un service externe

Intégrez un service comme :
- **Formspree** : https://formspree.io
- **EmailJS** : https://www.emailjs.com
- **GetForm** : https://getform.io

## 📊 Informations de contact du congrès

**Email:** benameurnehar@gmail.com  
**Téléphone:** +213 43 21 73 86  
**Fax:** +213 43 21 55 34  
**Adresse:** BP 226 Tlemcen 13000, Algérie

**Site SDBQL 2024:** https://sdbql2024tlemcen.wixsite.com/main  
**Facebook:** https://www.facebook.com/profile.php?id=61555922292059

## 👥 Comité d'organisation

**Présidents d'honneur:**
- Prof. Mourad MEGHACHOU - Recteur de l'Université de Tlemcen
- Prof. Nassima MOUKHTARI - Doyenne de la Faculté SNV-STU
- Prof. Fethi BENLADGHEM - Doyen de la Faculté des Sciences Économiques

**Direction du congrès:**
- **Présidente:** Prof. Nassima Amal Soulimane
- **Coordinateur Général:** Prof. Dr. Benameur NEHAR

## 💼 Sponsoring

Le congrès propose trois niveaux de sponsoring :

1. **Sponsor Officiel** - 1 000 000 DA
   - Visibilité maximale sur tous les supports
   - Stand de présentation
   - Panneaux publicitaires

2. **Sponsor Senior** - 400 000 DA
   - Présence sur le site web et affiches
   - Communication sur vos services

3. **Sponsor Junior** - 200 000 DA
   - Mention sur les supports principaux
   - Visibilité lors de l'événement

**Partenaire confirmé:** ONA (Office National de l'Assainissement)

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Mobile iOS et Android
- ✅ Tablettes
- ✅ Responsive à partir de 320px de largeur

## 🔧 Fonctionnalités JavaScript

- Navigation mobile responsive avec animation
- Effet de scroll sur la navbar
- Animations au scroll (Intersection Observer)
- Compteurs animés pour les statistiques
- Effet parallaxe sur le hero
- Formulaires interactifs
- Timeline animée pour les dates
- Lazy loading des images

## 🎯 Optimisations

- **Performance** : CSS et JavaScript vanilla (pas de frameworks lourds)
- **SEO** : Structure HTML sémantique, meta descriptions
- **Accessibilité** : Navigation au clavier, contrastes respectés
- **Mobile-first** : Optimisé d'abord pour mobile

## 📈 Historique - SDBQL 2024

La première édition du congrès s'est déroulée avec succès :
- **169 participants** (146 nationaux, 23 internationaux)
- **455 communications reçues**
- **20+ nationalités** représentées
- **7 symposiums** + Atelier doctoral
- Date : 26-27 juin 2024
- Lieu : Centre d'Études Andalouses, Tlemcen

## 🌐 Améliorations futures

- [ ] Système de soumission d'articles en ligne
- [ ] Espace participant avec authentification
- [ ] Galerie photo SDBQL 2024
- [ ] Carte interactive des participants
- [ ] Chat en direct pendant l'événement
- [ ] Version multilingue (Français, Arabe, Anglais)
- [ ] Intégration avec les réseaux sociaux

## 🤝 Contribution

Pour toute suggestion ou amélioration du site web, contactez :
- **Email technique:** benameurnehar@gmail.com
- **Facebook:** Page officielle SDBQL

## 📄 Licence

Ce site web est développé pour l'Université Abou Bekr Belkaid de Tlemcen.  
© 2026 SDBQL - Tous droits réservés.

## 🆘 Support technique

Pour toute question ou problème :
1. Vérifiez la console du navigateur (F12) pour les erreurs JavaScript
2. Testez la validation HTML : https://validator.w3.org
3. Contactez l'équipe technique du congrès

## ✨ Crédits

**Design et développement:** Site web créé avec HTML5, CSS3, et JavaScript vanilla  
**Organisateurs:** Faculté SNV-STU & Faculté des Sciences Économiques  
**Université:** Abou Bekr Belkaid, Tlemcen, Algérie

---

**Développé avec 💚 pour un avenir durable**

🌱 **SDBQL 2026** - Ressources Naturelles au Service des ODD
