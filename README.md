# Portfolio de Mohamed Faye

Portfolio personnel : développeur full-stack, étudiant en Licence 3 Informatique à l'ESP de Dakar.

React 19, Vite 6, TypeScript, Tailwind CSS 4, Motion. Site statique une page, en français, thème sombre.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # dist/
npm run lint     # tsc --noEmit
```

## Où se trouve quoi

| | |
| --- | --- |
| Profil, contact, réseaux, stats | `src/data/profile.ts` |
| Projets (états, stack, textes, captures, couleurs de scène) | `src/data/projects.ts` |
| Compétences | `src/data/skills.ts` |
| Parcours | `src/data/journey.ts` |
| Couleurs, polices, surfaces navigateur, nappes de scène | `src/index.css` |
| Le système visuel expliqué | `DESIGN.md` |
| La vérité produit | `PRODUCT.md` |

## Ajouter les médias d'un projet

Déposer les fichiers dans `public/` puis renseigner `images` (et `video` si besoin) dans `src/data/projects.ts` :

```ts
images: ['/projects-mci-1.png', '/projects-mci-2.png'],
video: '/projects-mci.mp4',
```

La première image sert de couverture dans la scène ; toutes apparaissent dans la fiche (`#projet/<id>`).

En développement, `?section=skills` monte une seule section (`home`, `projects`, `skills`, `journey`, `about`, `contact`).
