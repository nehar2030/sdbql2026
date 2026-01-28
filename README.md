# 🌍 SDBQL 2026 - Site Web Complet avec ODD

Site web professionnel avec **deux systèmes d'affichage des données ODD** :
1. 📊 **Bande défilante** en haut (ticker horizontal)
2. 🎯 **Widget flottant** en bas à droite

---

## ✨ NOUVEAUTÉS : Double Système d'Affichage ODD !

### 1. 📊 BANDE DÉFILANTE (Ticker)
**Position** : En haut, juste après la navigation  
**Fonction** : Défilement horizontal continu de droite à gauche  
**Vitesse** : Modérée (60 secondes pour un cycle complet)  
**Contenu** : 18 statistiques clés ODD 2025

#### Fonctionnalités :
- ✅ Défilement automatique infini
- ✅ Pause au survol de la souris
- ✅ Badge source "DONNÉES ODD 2025 - RAPPORT ONU"
- ✅ Icônes animées avec effet pulse
- ✅ Code couleur : 🟢 Vert (positif) / 🟡 Jaune (neutre) / 🔴 Rouge (alerte)
- ✅ Effet de brillance qui passe
- ✅ 100% responsive

### 2. 🎯 WIDGET FLOTTANT
**Position** : En bas à droite  
**Fonction** : Panneau interactif avec 5 onglets  
**Contenu** : Données détaillées par catégorie

#### Fonctionnalités :
- ✅ Bouton flottant discret
- ✅ 5 onglets interactifs
- ✅ Barres de progression animées
- ✅ Lien vers infographies complètes
- ✅ Fermeture multiple (X, clic extérieur, Escape)

---

## 📁 Structure du Projet COMPLÈTE

```
sdbql2026/
├── index-final.html                        # ⭐ FICHIER PRINCIPAL (avec ticker + widget)
├── index.html                              # Version avec widget uniquement
├── styles.css                              # Styles principaux du site
├── script.js                               # Scripts principaux
├── sdg-ticker.css                          # ✨ NOUVEAU - Styles du ticker
├── sdg-widget.css                          # Styles du widget flottant
├── sdg-widget.js                           # Fonctionnalités du widget
├── sdg-infographics-2025-corrected.html    # Page complète des infographies
├── README.md                               # Ce fichier
└── images/                                 # Dossier des images
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.png
    ├── 4.jpg
    ├── 5.jpg
    └── 6.jpg
```

---

## 🚀 Installation en 3 Étapes

### Étape 1 : Téléchargez TOUS les fichiers
Vous avez besoin de **9 fichiers** :
- ✅ **index-final.html** (⭐ UTILISEZ CELUI-CI pour avoir ticker + widget)
- ✅ styles.css
- ✅ script.js
- ✅ **sdg-ticker.css** (NOUVEAU pour la bande)
- ✅ **sdg-widget.css** (pour le widget)
- ✅ **sdg-widget.js** (pour le widget)
- ✅ sdg-infographics-2025-corrected.html
- ✅ images/ (dossier avec 6 images)

### Étape 2 : Organisez vos fichiers

```
votre-dossier/
├── index-final.html      ← ⭐ Renommez en "index.html"
├── styles.css
├── script.js
├── sdg-ticker.css        ← Important !
├── sdg-widget.css
├── sdg-widget.js
├── sdg-infographics-2025-corrected.html
└── images/
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.png
    ├── 4.jpg
    ├── 5.jpg
    └── 6.jpg
```

### Étape 3 : Ouvrez dans votre navigateur

```bash
# Renommez d'abord
mv index-final.html index.html

# Puis ouvrez
# Double-clic sur index.html
```

---

## 🎬 Aperçu Visuel

### Vue d'ensemble du site :

```
┌─────────────────────────────────────────────────────────────┐
│  📞 +213... ✉ email        Facebook | SDBQL 2024            │ ← Top Bar
├─────────────────────────────────────────────────────────────┤
│  🌱 SDBQL 2026    [Accueil] [À propos] [Thèmes]...         │ ← Navigation
├─────────────────────────────────────────────────────────────┤
│ 🌍 DONNÉES ODD 2025   ✅18% │ ⬇️18% │ ⚡92% │ 💧74% │ ... → │ ← ⭐ TICKER
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    CONTENU DU SITE                          │
│                    (Hero, À propos, etc.)                   │
│                                                              │
│                                          ┌─────────────────┐│
│                                          │ 📊 Données ODD  ││ ← Widget
│                                          └─────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Le Ticker en détail :

```
┌────────────────────────────────────────────────────────────────────┐
│ 🌍 DONNÉES ODD 2025 │ ✅ ODD en bonne voie: 18% │ ⬇️ ODD en      │
│ régression: 18% │ ⚡ Accès électricité: 92% │ 💧 Eau potable:    │
│ 74% │ 🌡️ Température 2024: +1.55°C │ 🦋 Espèces: 47,000+ │  ←→ │
└────────────────────────────────────────────────────────────────────┘
          ← Défilement continu de droite à gauche
          ⏸️  Pause automatique au survol
```

---

## 📊 Données Affichées

### Dans le TICKER (18 statistiques) :

**État Global** :
- ✅ ODD en bonne voie : **18%**
- ⬇️ ODD en régression : **18%**

**Environnement** :
- ⚡ Accès électricité : **92%**
- 💧 Eau potable sûre : **74%**
- 🚽 Assainissement : **58%**
- 🔥 Cuisson propre : **74%**

**Climat** :
- 🌡️ Température 2024 : **+1.55°C**
- 💨 Émissions CO₂ : **37.6 Gt**
- 🌊 Récifs blanchis : **84%**

**Biodiversité** :
- 🌳 Couvert forestier : **31%**
- 🦋 Espèces menacées : **47,000+**
- 🌿 Zones protégées : **17.6%**
- 🐟 Surpêche : **35.5%**

**Crises** :
- 😢 Extrême pauvreté : **808M**
- 🍽️ Insécurité alimentaire : **2.3B**
- 🏃 Déplacés forcés : **123M**
- ⚡ Sans électricité : **666M**
- 🏫 Hors école : **272M**

### Dans le WIDGET (5 onglets) :
- État Global (barres de progression)
- Environnement (grille 2x2)
- Climat (alerte + liste)
- Biodiversité (liste détaillée)
- Crises humanitaires (liste d'alertes)

---

## ⚙️ Personnalisation

### 🎨 Modifier la Vitesse du Ticker

Éditez `sdg-ticker.css` ligne 18 :
```css
animation: scroll-left 60s linear infinite;
                      ↑
              Changez cette valeur
              - 30s = plus rapide
              - 90s = plus lent
              - 60s = vitesse actuelle (recommandé)
```

### 🌈 Modifier les Couleurs du Ticker

Éditez `sdg-ticker.css` ligne 9 :
```css
background: linear-gradient(90deg, #004d40, #00695c, #00796b);
                                   ↑       ↑        ↑
                            Changez ces 3 couleurs
```

### 📏 Modifier la Hauteur du Ticker

Éditez `sdg-ticker.css` ligne 13 :
```css
padding: 12px 0;  /* Augmentez pour une bande plus haute */
```

### 🎭 Activer le Dégradé Animé

Dans `index-final.html`, changez :
```html
<div class="sdg-ticker">
```
En :
```html
<div class="sdg-ticker animated-bg">
```

### 🔇 Désactiver l'Animation Pulse des Icônes

Dans `sdg-ticker.css`, commentez lignes 95-101 :
```css
/* .ticker-icon {
    animation: pulse-icon 3s ease-in-out infinite;
} */
```

---

## 💻 Utilisation

### Option 1 : Ouvrir localement
```bash
# Après avoir renommé index-final.html en index.html
double-clic sur index.html
```

### Option 2 : Serveur local
```bash
# Avec Python 3
python -m http.server 8000

# Avec PHP  
php -S localhost:8000

# Avec Node.js
npx http-server
```

Puis : `http://localhost:8000`

---

## 🌐 Déploiement

### Netlify
1. Renommez `index-final.html` → `index.html`
2. Glissez-déposez tout le dossier sur Netlify
3. En ligne ! 🚀

### GitHub Pages
```bash
mv index-final.html index.html
git init
git add .
git commit -m "SDBQL 2026 avec ticker et widget ODD"
git push -u origin main
```

### Hébergement FTP
1. Renommez `index-final.html` → `index.html`
2. Uploadez TOUS les fichiers (9 fichiers + images)
3. Conservez la structure

---

## 📱 Responsive

### Desktop (>1024px)
- ✅ Ticker complet avec tous les labels
- ✅ Widget complet en bas à droite
- ✅ Défilement en 60 secondes

### Tablet (768px - 1024px)
- ✅ Ticker adapté (texte légèrement réduit)
- ✅ Widget adapté
- ✅ Défilement maintenu

### Mobile (<768px)
- ✅ Ticker compact (labels cachés sur très petit écran)
- ✅ Widget compact (icône seule)
- ✅ Défilement accéléré (45 secondes)

---

## 🐛 Dépannage

### Le ticker ne défile pas
1. ✅ Vérifiez que `sdg-ticker.css` est chargé (F12 > Network)
2. ✅ Vérifiez qu'il n'y a pas d'erreurs CSS (F12 > Console)
3. ✅ Essayez Ctrl+F5 pour rafraîchir

### Le ticker défile trop vite/lent
1. ✅ Modifiez la valeur dans `sdg-ticker.css` ligne 18
2. ✅ Testez différentes valeurs (30s, 45s, 60s, 90s)

### Le ticker ne se met pas en pause au survol
1. ✅ Vérifiez que vous survolez bien la bande verte
2. ✅ Sur mobile, la pause au survol n'est pas disponible

### Le widget n'apparaît pas
1. ✅ Vérifiez que `sdg-widget.css` et `sdg-widget.js` sont chargés
2. ✅ Vérifiez la console (F12)

### Les deux se chevauchent sur mobile
- ✅ C'est normal, ils sont positionnés différemment
- ✅ Le ticker est en haut fixe
- ✅ Le widget est en bas fixe
- ✅ Ils ne se touchent jamais

---

## 📞 Contact

**Organisateurs** : Université Abou Bekr Belkaid Tlemcen
- 📧 Email : benameurnehar@gmail.com
- 📞 Téléphone : +213 43 21 73 86
- 📍 Adresse : BP 226 Tlemcen 13000, Algérie

---

## ✅ Checklist de Déploiement

- [ ] Tous les fichiers téléchargés (9 fichiers + images)
- [ ] `index-final.html` renommé en `index.html`
- [ ] Ticker visible et défile correctement
- [ ] Widget apparaît en bas à droite
- [ ] Les 5 onglets du widget fonctionnent
- [ ] Pause au survol du ticker (desktop)
- [ ] Test sur mobile (ticker + widget responsive)
- [ ] Lien vers infographies complètes fonctionne
- [ ] Tous les liens de navigation fonctionnent
- [ ] Images chargées correctement

---

## 🎨 Versions Disponibles

1. **index-final.html** ⭐ RECOMMANDÉ
   - Ticker horizontal + Widget flottant
   - Version complète

2. **index.html**
   - Widget flottant uniquement
   - Sans ticker

---

## 📄 Licence

© 2026 SDBQL - Université de Tlemcen

---

**Développé avec 💚 pour un congrès académique d'excellence**

🌱 **SDBQL 2026** - Ressources Naturelles au Service des ODD

✨ **Double système d'affichage ODD** :
- 📊 Bande défilante horizontale (ticker)
- 🎯 Widget interactif flottant

---

## 🎯 Conseils Pro

### Pour un maximum d'impact visuel :
1. ✅ Gardez le ticker ET le widget (version finale)
2. ✅ Ajustez la vitesse selon votre audience
3. ✅ Testez les couleurs avec votre charte graphique
4. ✅ Activez le dégradé animé pour plus de dynamisme

### Pour une version sobre :
1. ⚪ Gardez uniquement le widget (index.html sans ticker)
2. ⚪ Ou gardez uniquement le ticker (modifiez index.html)

### Pour mobile :
1. 📱 Le ticker s'accélère automatiquement
2. 📱 Les labels se cachent sur très petit écran
3. 📱 Le widget devient une icône seule

Tout est pensé pour une expérience optimale ! 🚀
