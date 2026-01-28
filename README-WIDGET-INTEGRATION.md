# SDBQL 2026 - Site Web Moderne avec Widget ODD

Site web professionnel pour le 2ème Congrès International sur le Développement Durable pour une Meilleure Qualité de Vie.

## ✨ NOUVEAU : Widget SDG 2025 Intégré !

Le site inclut maintenant un **widget interactif flottant** affichant les données officielles ONU sur les Objectifs de Développement Durable 2025.

### 🎯 Fonctionnalités du Widget :
- ✅ Bouton flottant en bas à droite (non-intrusif)
- ✅ 5 onglets avec données officielles ONU
- ✅ Animations douces et design responsive
- ✅ Lien vers page complète des infographies
- ✅ Fermeture facile (X, clic extérieur, Escape)

---

## 📁 Structure du Projet

```
sdbql2026/
├── index.html                              # Page principale (AVEC WIDGET INTÉGRÉ)
├── styles.css                              # Feuille de styles principale
├── script.js                               # Scripts JavaScript principaux
├── sdg-widget.css                          # ✨ NOUVEAU - Styles du widget ODD
├── sdg-widget.js                           # ✨ NOUVEAU - Fonctionnalités du widget
├── sdg-infographics-2025-corrected.html    # ✨ NOUVEAU - Page complète infographies
├── README.md                               # Ce fichier
└── images/                                 # Dossier des images
    ├── 1.jpg                               # Amphithéâtre (galerie lieu - droite)
    ├── 2.jpg                               # Hall universitaire (galerie lieu - gauche)
    ├── 3.png                               # Université de Tlemcen (lieu - principale)
    ├── 4.jpg                               # Photo de groupe (section bienvenue)
    ├── 5.jpg                               # SDGs (bannière hero)
    └── 6.jpg                               # Nature vs industrie (fond historique)
```

---

## 🚀 Installation

### Étape 1 : Téléchargez tous les fichiers
Assurez-vous d'avoir **TOUS** les fichiers suivants :
- ✅ index.html (modifié avec le widget)
- ✅ styles.css
- ✅ script.js
- ✅ **sdg-widget.css** (NOUVEAU)
- ✅ **sdg-widget.js** (NOUVEAU)
- ✅ **sdg-infographics-2025-corrected.html** (NOUVEAU)
- ✅ images/ (dossier avec les 6 images)

### Étape 2 : Placez tous les fichiers dans le même dossier

```
votre-dossier/
├── index.html
├── styles.css
├── script.js
├── sdg-widget.css        ← Important !
├── sdg-widget.js         ← Important !
├── sdg-infographics-2025-corrected.html
└── images/
    └── (vos 6 images)
```

### Étape 3 : Ouvrez index.html dans votre navigateur

Le widget apparaîtra automatiquement en bas à droite ! 📊

---

## 💻 Utilisation

### Option 1 : Ouvrir localement
```bash
# Double-clic sur index.html
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

---

## 🎨 Le Widget SDG en Action

### Vue Fermée (par défaut)
```
                                    ┌─────────────────────┐
                                    │ 📊 Données ODD 2025 │
                                    └─────────────────────┘
                                                ↑
                                    Bouton flottant vert
                                    en bas à droite
```

### Vue Ouverte (après clic)
```
┌────────────────────────────────────────┐
│ 🌍 Progrès des ODD 2025            ✕  │
├────────────────────────────────────────┤
│ [Global] [Environ] [Climat] [Bio]...  │
├────────────────────────────────────────┤
│ État d'Avancement des ODD              │
│                                        │
│ ✅ En bonne voie            18%        │
│ ████░░░░░░░░                           │
│                                        │
│ 📈 Progrès modéré           17%        │
│ ███░░░░░░░░                            │
│                                        │
│ [Voir toutes les infographies →]      │
└────────────────────────────────────────┘
```

---

## 🌐 Déploiement

### Netlify (Recommandé)
1. Allez sur [netlify.com](https://www.netlify.com)
2. Glissez-déposez **TOUT LE DOSSIER** (y compris les nouveaux fichiers widget)
3. Votre site est en ligne !

### GitHub Pages
```bash
git init
git add .
git commit -m "Site SDBQL 2026 avec widget ODD intégré"
git branch -M main
git remote add origin <votre-repo>
git push -u origin main
```
Puis activez Pages dans Settings > Pages

### Hébergement classique (FTP)
1. Connectez-vous à votre hébergeur via FTP
2. Uploadez **TOUS** les fichiers dans `public_html/` ou `www/`
3. ⚠️ **Important** : N'oubliez pas les 3 nouveaux fichiers widget !

---

## ⚙️ Personnalisation du Widget

### Changer la Position
Éditez `sdg-widget.css` ligne 10-15 :
```css
.sdg-widget {
    position: fixed;
    bottom: 30px;    /* Distance du bas */
    right: 30px;     /* Distance de la droite */
}
```

### Changer les Couleurs
Éditez `sdg-widget.css` ligne 20 :
```css
.sdg-widget-toggle {
    background: linear-gradient(135deg, #004d40, #00796b);
    /* Changez ces couleurs selon votre charte */
}
```

### Désactiver le Widget
Si vous voulez temporairement désactiver le widget :

**Option 1** : Commentez dans `index.html`
```html
<!-- <link rel="stylesheet" href="sdg-widget.css"> -->
<!-- <script src="sdg-widget.js"></script> -->
```

**Option 2** : Ajoutez dans `sdg-widget.css`
```css
.sdg-widget {
    display: none !important;
}
```

---

## 📊 Données du Widget

Le widget affiche les **données officielles** du Rapport ONU sur les ODD 2025 :

### Onglet 1 : État Global
- 18% en bonne voie
- 17% progrès modéré
- 31% progrès marginal
- 17% stagnation
- 18% régression

### Onglet 2 : Environnement
- 92% accès électricité
- 74% cuisson propre
- 74% eau potable sûre
- 58% assainissement géré

### Onglet 3 : Climat
- +1.55°C température 2024
- 37.6 Gt émissions CO₂
- 84% récifs coralliens blanchis
- 8.4% aires marines protégées

### Onglet 4 : Biodiversité
- 31% couvert forestier
- 47,000+ espèces menacées
- 17.6% zones protégées
- 35.5% surpêche
- 15.5% terres dégradées

### Onglet 5 : Crises Humanitaires
- 808M extrême pauvreté
- 2.3B insécurité alimentaire
- 123M déplacés forcés
- 2.2B sans eau potable
- 666M sans électricité

---

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

---

## 📱 Responsive

Le site ET le widget sont entièrement responsive :
- **Desktop** : >1024px - Widget complet
- **Tablet** : 768px - 1024px - Widget adapté
- **Mobile** : <768px - Widget compact (icône seule)

---

## ✨ Fonctionnalités

### Site Principal :
- ✅ Navigation responsive avec menu hamburger
- ✅ Animations au scroll
- ✅ Compteurs animés
- ✅ Formulaires de contact
- ✅ Newsletter
- ✅ Timeline des dates
- ✅ Section sponsoring
- ✅ Galerie d'images

### Widget ODD (NOUVEAU) :
- ✅ 5 onglets interactifs
- ✅ Barres de progression animées
- ✅ Statistiques en temps réel
- ✅ Design non-intrusif
- ✅ Lien vers infographies complètes
- ✅ Responsive mobile
- ✅ Animation pulse pour attirer l'attention

---

## 🛠️ Technologies

- HTML5 sémantique
- CSS3 (Grid, Flexbox, Variables, Animations)
- JavaScript ES6+ vanilla (Intersection Observer, Event Delegation)
- Google Fonts (Raleway, Open Sans)
- **Widget SDG** : CSS Grid, Flexbox, Transitions, LocalStorage

---

## 🐛 Dépannage

### Le widget n'apparaît pas
1. ✅ Vérifiez que `sdg-widget.css` est dans le même dossier
2. ✅ Vérifiez que `sdg-widget.js` est dans le même dossier
3. ✅ Ouvrez la console (F12) pour voir les erreurs
4. ✅ Vérifiez que les liens sont corrects dans `index.html`

### Le widget ne s'ouvre pas
1. ✅ Vérifiez que `sdg-widget.js` se charge (console F12 > Network)
2. ✅ Essayez de rafraîchir la page (Ctrl+F5)
3. ✅ Vérifiez qu'il n'y a pas de conflits JavaScript

### Les onglets ne fonctionnent pas
1. ✅ Assurez-vous que `sdg-widget.js` est chargé APRÈS `script.js`
2. ✅ Vérifiez la console pour erreurs JavaScript

### Le lien vers les infographies ne marche pas
1. ✅ Vérifiez que `sdg-infographics-2025-corrected.html` est présent
2. ✅ Vérifiez qu'il est dans le même dossier que `index.html`

---

## 📞 Contact

**Organisateurs** : Université Abou Bekr Belkaid Tlemcen
- Email : benameurnehar@gmail.com
- Téléphone : +213 43 21 73 86
- Adresse : BP 226 Tlemcen 13000, Algérie

---

## 📝 Notes Importantes

- ✅ **Toutes les images sont locales** - Pas besoin de connexion internet
- ✅ **Le widget fonctionne hors ligne** - Données intégrées en dur
- ✅ **Optimisez les images** si nécessaire (compression)
- ✅ **Testez sur mobile** avant déploiement
- ✅ **Configurez SSL/HTTPS** pour la production
- ✅ **Le widget se cache automatiquement à l'impression**

---

## ✅ Checklist de Déploiement

- [ ] Tous les fichiers sont présents (8 fichiers + dossier images)
- [ ] Le widget apparaît en bas à droite
- [ ] Le widget s'ouvre au clic
- [ ] Les 5 onglets fonctionnent
- [ ] Le lien vers infographies complètes fonctionne
- [ ] Test sur mobile (widget responsive)
- [ ] Test sur différents navigateurs
- [ ] Images optimisées et chargées correctement
- [ ] Formulaire de contact testé
- [ ] Tous les liens de navigation fonctionnent

---

## 📄 Licence

© 2026 SDBQL - Université de Tlemcen

---

**Développé avec 💚 pour un congrès académique d'excellence**

🌱 **SDBQL 2026** - Ressources Naturelles au Service des ODD

✨ **Nouveau** : Widget SDG interactif avec données officielles ONU 2025
