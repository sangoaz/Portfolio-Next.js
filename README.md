# Portfolio — Kévin Fruchon

Portfolio personnel construit avec Next.js (App Router) et Tailwind CSS.

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS 4 (config CSS-first dans `app/globals.css`, pas de `tailwind.config.js`)

## Structure

```
app/
  page.tsx              Accueil
  projets/
    page.tsx             Liste des projets
    glf-auto/            Détail GLF Auto
    car-fleet/            Détail Car Fleet Management
    brians-buzzer/         Détail Brian's Buzzer
    loki-escape/            Détail Loki Escape
  competences/           Page compétences
  parcours/               Page parcours (reconversion)
  contact/                 Page contact
  globals.css              Design tokens (couleurs, thème sombre)

components/
  Navbar.tsx, Footer.tsx      Structure globale
  ProjectCard.tsx, TechBadge.tsx, ScreenshotGallery.tsx   Blocs projets
  ContactButton.tsx           Boutons de la page contact

public/projects/          Captures d'écran par projet
```

## Lancer le projet en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

Pour tester le build de production :

```bash
npm run build
npm run start
```

## Design

Thème sombre, accent teal/émeraude. Toutes les couleurs sont centralisées dans `:root` et `@theme inline` en haut de `app/globals.css` (`--background`, `--surface`, `--accent`, `--muted`, etc.) — pour changer la teinte d'accent, il suffit de modifier `--accent` à un seul endroit.

## À compléter

- [ ] Texte de la page **Parcours** (ancien métier, formation, dates) — actuellement des placeholders entre crochets
- [ ] Captures d'écran réelles dans `public/projects/` (`buzzer/host.png`, `buzzer/player.png`, `car-fleet/swagger.png`, `glf-auto/home.png`, `glf-auto/admin.png`) — fichiers présents mais vides
- [ ] Photo de profil dans `public/projects/profille/photo.png` — fichier vide, actuellement remplacé par un avatar avec initiales sur la page Parcours
- [ ] Captures d'écran pour Loki Escape (aucune pour l'instant)
- [ ] Liens LinkedIn / Malt sur la page Contact, si souhaité

## Projets présentés

- **GLF Auto** — plateforme de vente de véhicules et pièces d'occasion pour un garage, déployée en production ([backend](https://github.com/sangoaz/GLF-auto), [frontend](https://github.com/sangoaz/GLF-auto-Frontend))
- **Car Fleet Management** — API de gestion de flotte automobile multi-entreprises ([repo](https://github.com/sangoaz/Car-Fleet-Managment))
- **Brian's Buzzer** — buzzer temps réel multi-joueurs via WebSockets ([repo](https://github.com/sangoaz/Brian-s-Buzzer))
- **Loki Escape** — backend d'un escape game interactif ([repo](https://github.com/sangoaz/Escape-Loki))

## Déploiement

Prévu pour Vercel (build Next.js standard, aucune configuration particulière requise).
