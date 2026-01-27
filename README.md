# SDBQL 2026 - Site Web Moderne

Site web professionnel pour le 2ème Congrès International sur le Développement Durable pour une Meilleure Qualité de Vie.

## 📁 Structure du Projet

```
sdbql2026/
├── index.html          # Page principale
├── styles.css          # Feuille de styles
├── script.js           # Scripts JavaScript
├── README.md           # Ce fichier
└── images/             # Dossier des images
    ├── 1.jpg          # Amphithéâtre (galerie lieu - droite)
    ├── 2.jpg          # Hall universitaire (galerie lieu - gauche)
    ├── 3.png          # Université de Tlemcen (lieu - principale)
    ├── 4.jpg          # Photo de groupe (section bienvenue)
    ├── 5.jpg          # SDGs (bannière hero)
    └── 6.jpg          # Nature vs industrie (fond historique)
```

## 🎨 Correspondance des Images

### Image 1 (1.jpg) - Amphithéâtre
- **Emplacement**: Section Lieu > Galerie droite
- **Description**: Amphithéâtre avec lustre décoratif

### Image 2 (2.jpg) - Hall Universitaire
- **Emplacement**: Section Lieu > Galerie gauche
- **Description**: Hall avec colonnes décoratives

### Image 3 (3.png) - Université de Tlemcen
- **Emplacement**: Section Lieu > Image principale
- **Description**: Entrée de l'Université avec logo

### Image 4 (4.jpg) - Photo de Groupe
- **Emplacement**: Section Bienvenue (À propos)
- **Description**: Photo de groupe du congrès

### Image 5 (5.jpg) - SDGs
- **Emplacement**: Bannière Hero (section d'accueil)
- **Description**: Illustration des Objectifs de Développement Durable

### Image 6 (6.jpg) - Nature vs Industrie
- **Emplacement**: Section Historique SDBQL 2024 (fond)
- **Description**: Contraste nature/développement

## 🚀 Installation

1. **Téléchargez le dossier complet** `sdbql2026/`
2. **Assurez-vous que tous les fichiers sont présents** :
   - index.html
   - styles.css
   - script.js
   - images/ (avec toutes les 6 images)

## 💻 Utilisation

### Option 1 : Ouvrir localement
```bash
# Ouvrez simplement index.html dans votre navigateur
double-clic sur index.html
```

### Option 2 : Serveur local (recommandé)
```bash
# Avec Python 3
python -m http.server 8000

# Avec PHP
php -S localhost:8000

# Avec Node.js (npx)
npx http-server
```

Puis ouvrez : `http://localhost:8000`

## 🌐 Déploiement

### Netlify (Recommandé)
1. Allez sur [netlify.com](https://www.netlify.com)
2. Glissez-déposez le dossier `sdbql2026/`
3. Votre site est en ligne !

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <votre-repo>
git push -u origin main
```
Puis activez Pages dans Settings > Pages

### Hébergement classique (FTP)
1. Connectez-vous à votre hébergeur via FTP
2. Uploadez tous les fichiers dans `public_html/` ou `www/`
3. Conservez la structure des dossiers

## ⚙️ Personnalisation

### Modifier les couleurs
Éditez `styles.css` lignes 7-17 :
```css
:root {
    --color-primary: #004d40;
    --color-secondary: #009688;
    /* ... */
}
```

### Modifier le contenu
Éditez `index.html` :
- Dates : ligne 71
- Lieu : ligne 75
- Textes : sections identifiées par id

### Remplacer des images
1. Placez votre nouvelle image dans `images/`
2. Modifiez le chemin dans `index.html`
3. Gardez les noms cohérents (ou mettez à jour tous les liens)

## 📱 Responsive

Le site est entièrement responsive :
- **Desktop** : >1024px
- **Tablet** : 768px - 1024px
- **Mobile** : <768px

## ✨ Fonctionnalités

- ✅ Navigation responsive avec menu hamburger
- ✅ Animations au scroll
- ✅ Compteurs animés
- ✅ Formulaires de contact
- ✅ Newsletter
- ✅ Timeline des dates
- ✅ Section sponsoring
- ✅ Galerie d'images

## 🛠️ Technologies

- HTML5 sémantique
- CSS3 (Grid, Flexbox, Variables)
- JavaScript ES6+ vanilla
- Google Fonts (Raleway, Open Sans)

## 📞 Contact

**Organisateurs** : Université Abou Bekr Belkaid Tlemcen
- Email : benameurnehar@gmail.com
- Téléphone : +213 43 21 73 86
- Adresse : BP 226 Tlemcen 13000, Algérie

## 📝 Notes Importantes

- **Toutes les images sont locales** - Pas besoin de connexion internet
- **Optimisez les images** si nécessaire (compression)
- **Testez sur mobile** avant déploiement
- **Configurez SSL/HTTPS** pour la production

## 📄 Licence

© 2026 SDBQL - Université de Tlemcen

---

**Développé avec 💚 pour un congrès académique d'excellence**

🌱 **SDBQL 2026** - Ressources Naturelles au Service des ODD
