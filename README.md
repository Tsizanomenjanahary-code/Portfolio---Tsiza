# Portfolio - Tsiza Nomenjanahary (Tailwind Pro)

## 🚀 Fonctionnalités
- **Header fixe** - Navigation toujours accessible lors du défilement
- **Design responsive** - S'adapte à tous les appareils
- **Multi-langue** - Français, Malagasy, English
- **Thème sombre/clair** - Avec détection automatique
- **Animations fluides** - AOS (Animate On Scroll)
- **Formulaire de contact** - EmailJS + fallback Netlify
- **Gallery projets** - Filtres, recherche et lightbox
- **Loader élégant** - Expérience de chargement moderne

## 📁 Structure
```

portfolio-tsiza/
├──index.html          # Page d'accueil (bilingue, thème, contact)
├──projets.html        # Page Projets (filtres, lightbox, animations)
├──css/
│├── styles.css      # Styles complémentaires + header fixe
│├── aos.css         # Animations scroll
│└── css2.css        # Police Poppins
├──javascript/
│├── app.js          # Logique: langue, thème, contact, projets
│├── tailwindcss.js  # Tailwind CSS
│└── aos.js          # Animation library
├──images/             # Assets et screenshots projets
├──CV_TSIZA.pdf        # CV téléchargeable
└──README.md           # Documentation

```

## 🛠 Déploiement rapide

### 1. Préparation des fichiers
```bash
# Structure recommandée
portfolio-tsiza/
├── index.html
├── projets.html
├── css/
├── javascript/
├── images/
└── CV_TSIZA.pdf

### 2. Personnalisation

· Photo : Remplacer images/photo.png par votre photo
· CV : Remplacer CV_TSIZA.pdf par votre CV
· EmailJS : Remplacer les clés dans app.js (optionnel)
· Projets : Modifier la variable projects dans app.js