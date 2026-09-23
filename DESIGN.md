---
name: Portfolio Mohamed Faye
description: Terminal sombre, nom géant, six projets vécus comme six scènes colorées.
colors:
  nuit-profonde: "#0B0F19"
  surface-ardoise: "#111827"
  bleu-signal: "#3B82F6"
  bleu-signal-clair: "#60A5FA"
  vert-en-ligne: "#22C55E"
  ambre-interne: "#F59E0B"
  texte-givre: "#E5E7EB"
  texte-sourdine: "#9CA3AF"
  filet-ardoise: "#1F2937"
  filet-blanc-06: "rgba(255,255,255,0.06)"
  filet-blanc-10: "rgba(255,255,255,0.10)"
  filet-blanc-15: "rgba(255,255,255,0.15)"
  filigrane-blanc-07: "rgba(255,255,255,0.07)"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8.6vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  scene-title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
  chip:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  watermark:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.06em"
rounded:
  focus: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  3xl: "64px"
  section: "112px"
  section-lg: "160px"
components:
  button-primary:
    backgroundColor: "{colors.texte-givre}"
    textColor: "{colors.nuit-profonde}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.bleu-signal}"
    textColor: "{colors.nuit-profonde}"
  button-secondary:
    backgroundColor: "rgba(17,24,39,0.4)"
    textColor: "{colors.texte-givre}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-nav-cta:
    backgroundColor: "{colors.texte-givre}"
    textColor: "{colors.nuit-profonde}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  chip-tech:
    backgroundColor: "rgba(11,15,25,0.7)"
    textColor: "rgba(229,231,235,0.85)"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  filter-pill-active:
    backgroundColor: "{colors.texte-givre}"
    textColor: "{colors.nuit-profonde}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.texte-sourdine}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  status-pill:
    backgroundColor: "rgba(11,15,25,0.6)"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card-profile:
    backgroundColor: "rgba(17,24,39,0.6)"
    textColor: "{colors.texte-givre}"
    rounded: "{rounded.lg}"
    padding: "12px"
  card-media:
    backgroundColor: "rgba(17,24,39,0.6)"
    rounded: "{rounded.lg}"
    padding: "8px"
  nav-pill:
    backgroundColor: "rgba(17,24,39,0.4)"
    textColor: "{colors.texte-sourdine}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 20px"
---

# Design System: Portfolio Mohamed Faye

## Overview

**Creative North Star: "Le poste avancé : une planète, puis six scènes"**

Le site est un poste avancé dans le noir : une séquence de démarrage en console, puis un nom géant devant une planète de particules, puis six projets traversés comme six chapitres plein écran. Un champ d'étoiles fixe traverse toute la page (`body::before`), et les contenus techniques sont posés sur des panneaux à trame de schéma plutôt que sur le fond nu. Tout part du fond nuit (#0B0F19) : la lumière vient de deux accents seulement, un bleu de signal et un vert « en ligne », plus un ambre strictement réservé à l'état « projet interne ». La densité est faible et l'échelle typographique très contrastée : des titres Inter serrés à 8 rem face à des étiquettes mono de 11 px. Le monde ne se distingue pas par des cartes en verre alignées mais par des nappes de couleur propres à chaque projet, un grain fixe et un empilement collant des scènes.

L'identité « terminal / tech » est assumée sans être cosplayée : le prompt `mfaye@portfolio:~`, les labels mono en capitales espacées et le point-LED d'état sont les seuls artefacts de console. Le reste est un site éditorial sombre et lisible sur un téléphone. Le bento uniforme et le style « aurora » ont été rejetés explicitement ; le hero VELOS (nom + carte profil) et la carte profil Nova ont été retenus comme références contraignantes.

**Key Characteristics:**
- Thème sombre unique, jamais de mode clair ; le fond nuit est le matériau, pas un « dark mode ».
- Deux accents fonctionnels (bleu, vert) + un ambre d'état ; les boutons principaux sont blancs givrés, pas colorés.
- Inter très serré (-0.04 à -0.045em) pour tout ce qui est grand ; JetBrains Mono uniquement pour les étiquettes de données.
- Pilules pour tout ce qui se clique, 24 px pour les cartes, 16 px pour ce qu'elles contiennent.
- Profondeur par nappes de couleur, filets blancs translucides, panneaux à liseré interne et une seule ombre portée large et sombre.
- Environnement permanent : champ d'étoiles fixe derrière toute la page, planète de particules au hero, trame de schéma dans les panneaux.
- Motion à courbe expo-out unique, toujours dégradée sous `prefers-reduced-motion`.

## Colors

Une palette verrouillée à la demande du propriétaire : un fond nuit, une surface ardoise, deux accents de signal, et des filets blancs translucides pour tout le reste.

### Primary
- **Bleu signal** (`bleu-signal`) : la seconde ligne du nom au hero (« FAYE »), le point de `mohamed.faye`, le chevron `>` des lignes du boot et du menu mobile, le nœud de la timeline, le tiret des listes de compétences, les liens texte (« Me contacter », pièces jointes du parcours), l'anneau de focus, le caret et la sélection. Il est aussi la couleur du survol des boutons principaux et de la LED « Bientôt en ligne ». Il n'est jamais un fond de bouton au repos (sauf le CTA du menu mobile).
- **Bleu signal clair** (`bleu-signal-clair`) : uniquement comme seconde couleur de nappe (`--wash-b`) sur la scène Amsa Shop. Pas d'autre emploi.

### Secondary
- **Vert en ligne** (`vert-en-ligne`) : l'état « En ligne » (LED, texte et anneau de la pastille), la pastille « Disponible » de la carte profil, les `[ OK ]` et « EN LIGNE » du boot, la couleur de survol des liens texte bleus. Il signifie toujours « ça tourne » ; il ne décore rien.

### Tertiary
- **Ambre interne** (`ambre-interne`) : réservé à l'état « Projet interne » (LED + texte + anneau) et à la nappe de la scène MCI. Aucune autre surface ne peut l'utiliser.

### Neutral
- **Nuit profonde** (`nuit-profonde`) : fond du body, des scènes, du boot, de la barre de retour de la fiche ; texte des boutons blancs. Versions translucides (`/60`, `/70`, `/80`, `/95`) pour les pastilles, chips, nav scrollée et menu mobile.
- **Surface ardoise** (`surface-ardoise`) : fond des cartes (`/60`, `/50`), de la nav au repos (`/40`), du bouton secondaire (`/40`), des médias de la fiche (plein).
- **Texte givré** (`texte-givre`) : texte principal, fond des boutons principaux et du filtre actif. Atténué en `/80`, `/75`, `/70` pour les paragraphes secondaires, en `/85` pour les chips.
- **Texte sourdine** (`texte-sourdine`) : paragraphes d'accroche, labels mono, seconde proposition des titres de section, liens de nav inactifs, icônes au repos.
- **Filet ardoise** (`filet-ardoise`) : bordure de la nav scrollée, du conteneur des filtres, du pouce de scrollbar, rail de la barre de progression du boot.
- **Filets blancs** (`filet-blanc-06`, `filet-blanc-10`, `filet-blanc-15`) : la vraie hiérarchie de bordures du site. 6 % pour les séparations structurelles (haut de scène, footer, barre de retour), 10 % pour les cartes, filets de section, séparateurs de colonnes et fil de la timeline, 15 % pour les boutons secondaires, le nœud de timeline et les emplacements en pointillé.
- **Filigrane blanc** (`filigrane-blanc-07`) : l'année géante derrière chaque étape du parcours. Réservé à ce filigrane.

### Named Rules
**La règle de l'accent qui informe.** Bleu, vert et ambre n'apparaissent que là où ils signifient quelque chose (état, lien, position active, focus) ou dans une nappe de scène. Un bouton au repos est blanc givré sur nuit ; le bleu n'arrive qu'au survol.

**La règle de l'ambre interne.** L'ambre n'existe que pour l'état « Projet interne » et la nappe de MCI. Toute autre apparition est une faute.

**La règle des filets blancs.** Les bordures sont des blancs translucides à 6, 10 ou 15 %, jamais des gris opaques, sauf le `filet-ardoise` sur les conteneurs opaques (nav scrollée, filtres, scrollbar).

## Typography

**Display Font:** Inter (700 ; repli ui-sans-serif, system-ui)
**Body Font:** Inter (400, 500, 600 ; même repli)
**Label/Mono Font:** JetBrains Mono (400, 500, 700 ; repli ui-monospace, SFMono-Regular)

Chargées via Google Fonts (Inter 400 à 800, JetBrains Mono 400 à 700), `display=swap`.

**Character :** Inter serré jusqu'à -0.045em et interligné sous 1 pour tout ce qui est grand ; le mono ne sert qu'aux étiquettes de données, en capitales espacées de 0.16em. Le contraste d'échelle (8 rem contre 11 px) fait la voix du site.

### Hierarchy
- **Display** (700, `clamp(3.25rem, 8.6vw, 8rem)`, interligne 0.9, -0.045em, capitales) : le nom au hero, une ligne par mot, la seconde en bleu. Nulle part ailleurs.
- **Scene title** (700, `clamp(2.75rem, 7.5vw, 6rem)`, 0.92, -0.04em, `text-balance`) : le titre court de chaque scène projet.
- **Headline** (700, 2.25 rem à 3.75 rem, 4.5 rem au contact en lg, 0.95, -0.04em, `text-balance`) : titres de section. La seconde proposition est toujours en sourdine (`texte-sourdine`), ce qui remplace tout sous-titre.
- **Title** (700, 1.5 à 1.875 rem, -0.025em) : étapes du parcours, nom sur la carte profil (1.25 rem), titre de la fiche projet. Les groupes de compétences descendent à 1.125 rem 600.
- **Lead** (400, 1.125 à 1.25 rem, 1.625) : phrase du hero (46ch), résumé de scène (52ch, `texte-givre/80`), accroches de section (56 à 58ch, sourdine), premier paragraphe À propos (1.25 rem, givré plein).
- **Body** (400, 1 rem à 1.125 rem, 1.625) : descriptions de parcours (52ch), paragraphes de fiche (65ch, `texte-givre/85`), À propos (62ch, `/75`).
- **Label** (JetBrains Mono 400, 11 px, 0.16em, capitales) : contexte de projet, période et type du parcours, titre du groupe langages, `dt` de la fiche, « Captures à venir », « Projet suivant ». Porte une donnée, jamais une accroche.
- **Chip** (JetBrains Mono 400, 12 px, casse normale) : technologies.
- **Contact value** (600, 1 rem puis 1.25 et 1.875 rem) : l'adresse et les numéros dans les lignes de contact ; le pas de 1 rem tient sur une ligne à 390 px.
- **Brand** (JetBrains Mono, 14 px, `tracking-tight`) : `mohamed.faye` dans la nav, la barre de retour et le footer.
- **Watermark** (700, 12 rem, -0.06em, blanc 7 %) : année derrière chaque étape du parcours, desktop seulement.
- **Compétences en grand** : les trois premiers langages en 2.25 à 3.75 rem 700, les suivants en 1.5 à 2.25 rem `texte-givre/70`, -0.03em.

### Named Rules
**La règle de la seconde proposition.** Un titre de section ne porte pas d'étiquette au-dessus ; sa nuance vient d'une seconde proposition en sourdine dans le même h2.

**La règle du mono qui étiquette.** Le mono n'écrit que des données courtes : état, période, contexte, techno, prompt. Jamais un titre, jamais un paragraphe.

**La règle des chiffres tabulaires.** Toute valeur numérique alignée (stats, index de fiche) porte `font-variant-numeric: tabular-nums`.

## Layout

Page unique sous une nav flottante, plus une route de fiche (`#projet/<id>`) qui remplace la page. Conteneur principal `max-w-7xl` (1280 px) avec gouttières 16 / 24 / 32 px (base, sm, lg) ; la fiche projet se resserre à `max-w-6xl` (1152 px) et la nav à `max-w-4xl` (896 px). Les grilles sont en 12 colonnes à partir de `lg` : hero 7 + 5, scène 7 + 5 alignée en bas, À propos 5 + 6 décalé à la colonne 7, réseau + certificat 7 + 5.

Rythme vertical : sections à `py-28` (112 px) puis `py-40` (160 px) en lg. Le hero occupe `min-h-[100dvh]` avec `pt-24`. L'en-tête des projets fait `pt-28 pb-14` puis `pt-36 pb-20`. À l'intérieur d'une section, les blocs s'enchaînent en 56 px (`mt-14`), 64 px (`mt-16`) ou 80 px (`mt-20`) avec un filet blanc 10 % en haut. Les listes internes respirent en 8 à 12 px.

Les scènes projets sont des conteneurs de `150dvh` (`165dvh` en lg) avec un article `sticky top-0 h-[100dvh]` ; chaque scène a un `z-index` croissant et un `mb-[-1px]` pour effacer la couture. Le pied de page fait `py-10`.

Responsive : mobile d'abord pour la lecture. Sous `lg`, la carte profil passe sous le texte, les scènes s'empilent texte puis figure, la timeline se range à gauche sur un fil à 16 px avec un décalage `pl-14`, les filigranes disparaissent. Sous `md`, la nav se replie en menu, les colonnes de compétences deviennent une pile avec 40 px d'écart. Les lignes de contact tiennent à 390 px grâce à `overflow-wrap: anywhere` et une valeur qui passe de 0.95 rem à 1.25 rem puis 1.875 rem. `scroll-padding-top: 6rem` compense la nav.

## Elevation & Depth

Le système est plat et tonal : la profondeur vient des translucidités sur nuit (surfaces à 40 à 60 %, `backdrop-blur-xl` sur nav, carte profil, menu mobile, barre de retour), des filets blancs, des nappes de couleur radiales et d'un grain fixe (`.grain`, bruit pré-calculé `public/grain.png` de 96 px, opacité 0.05, couche promue par `translateZ(0)`, `z-index 60`, jamais sur un conteneur qui défile). Une seule ombre portée existe, large, basse et très sombre, réservée aux deux cartes à contenu réel.

### Matière du monde
- **`body::before` (champ d'étoiles)** : dix dégradés radiaux d'un pixel, pavés en 620 px, blanc/bleu/vert entre 30 et 60 % d'opacité, fixés au viewport en `z-index 0`, `#root` passant en `z-index 1`. Les sections n'ont plus de fond opaque sauf les scènes projet, qui doivent s'empiler.
- **`.panel`** : rayon 24 px, bordure blanche 8 %, fond en dégradé blanc 4.5 % vers transparent sur ardoise 55 %, liseré interne `inset 0 1px 0` blanc 7 % et ombre `0 28px 70px -40px` noire. C'est le matériau de tout bloc technique : modules de compétences, panneau de contact, cadre du portrait, console de démarrage, menu mobile.
- **`.tile`** : carré de 44 px, rayon 12 px, bordure blanche 9 %, dégradé blanc 6 % vers 1.5 %, liseré interne. Porte les icônes (une seule famille, Lucide, trait 2) et les nœuds de la timeline.
- **Logos techniques** : tracés Simple Icons (CC0) inlinés dans `TechLogo`, rendus monochromes en `currentColor` (givré 75 à 90 %, plein givré au survol). Jamais en couleurs de marque : la page garde un seul accent. Une techno sans logo propre (API REST, SQL, UML, protocoles réseau) reçoit le filet bleu de 4 px à la place.
- **`.schematic`** : trame de points blancs 5 % au pas de 22 px, appliquée sur les panneaux pour les faire lire comme un fond de plan.
- **`.scan`** : une ligne bleue qui balaie le panneau de haut en bas en 7 s, réservée à la console de démarrage, coupée sous `prefers-reduced-motion`.

### Shadow Vocabulary
- **Carte posée** (`box-shadow: 0 40px 100px -30px rgba(0,0,0,0.8)`) : la carte profil du hero.
- **Média posé** (`box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7)`) : la capture de couverture d'une scène.
- **Nav scrollée** (`shadow-lg shadow-black/30`, soit `0 10px 15px -3px rgba(0,0,0,0.3)`) : la pilule de navigation quand `scrollY > 40`.
- **LED** (`0 0 10px` de la couleur d'état à 80 %) : halo du point de la pastille d'état, uniquement pour en ligne, interne, bientôt. « Code public » n'a pas de halo.

### Named Rules
**La règle de la nappe sans flou.** Une nappe de scène est trois dégradés radiaux déjà doux (`.scene-wash`, `inset: -20%`, opacité 0.7, `contain: paint`). Aucun `filter: blur` dessus : six scènes empilées ne le supportent pas. Le flou (`blur-[120px]` à `blur-[140px]`) reste permis sur les halos isolés du hero, du boot et du contact, qui ne s'empilent pas.

**La règle du grain unique.** Un seul calque de grain, fixé au viewport (`z-index 60`), au-dessus de la page et de la nav (`z-index 50`), sous le boot (`z-index 100`). Il ne se répète pas par section, et il est peint une fois : ni filtre SVG ni `mix-blend-mode`, qui forçaient un mélange plein écran à chaque image et coûtaient à eux seuls la moitié du budget.

**La règle du calque qui tourne.** Rien de grand ne tourne en DOM. Une forme de plusieurs centaines de pixels qui pivote en continu se re-rasterise à chaque angle : ce qui doit tourner à cette échelle se dessine dans un canvas. Mesuré sur le hero : 50 ms par image avec deux anneaux en rotation, 16,7 ms une fois tracés dans le canvas. Même cause sur les scènes projets : la nappe `.scene-wash` faisait 2016 x 1259 px et s'animait en `scale` + `rotate`, ce qui forçait le navigateur à promouvoir tout ce qui la recouvrait, soit des textures de la hauteur de la page entière (91 Mo chacune, 347 Mo au total sur une seule position de défilement). La nappe ne s'anime plus et ne déborde plus de son cadre.

**La règle des deux propriétés.** Une animation liée au défilement ne touche que `transform: translate` et `opacity` : ce sont les seules que le compositeur sait animer sans repeindre. Les scènes projets reculaient en `scale` ; mettre à l'échelle un sous-arbre contenant un titre de 6 rem oblige à le rastériser à nouveau à chaque image. Le recul se lit maintenant par une translation plus franche (-72 px) et un assombrissement (1 à 0,28).

## Shapes

Trois rayons et une pilule. Tout ce qui se clique est une pilule (9999 px) : nav, liens actifs, boutons, filtres, chips, pastilles, icônes sociales (36 px ronds), icônes de contact (44 px ronds), nœuds de timeline (36 px). Les cartes sont en 24 px (`rounded-3xl`) : carte profil, média de scène, emplacement en pointillé, médias et cartes de la fiche, carte « projet suivant ». Ce qu'une carte contient est en 16 px (`rounded-2xl`) : photo, capture, menu mobile, tuile certificat, ligne de contact au survol. Les tuiles d'icône reprennent le 12 px des petites tuiles (`.tile`). Les petites tuiles internes sont en 12 px (`rounded-xl`) : tuiles de stats (deux, pas trois), entrées du menu mobile, image du certificat. L'anneau de focus est en 6 px.

Les bordures sont toujours de 1 px. Le pointillé (`border-dashed`) est réservé aux emplacements en attente (captures à venir, « Bientôt en ligne » sur la fiche) et aux orbites du hero. Les images de couverture ont un ratio `16/10`, le certificat `1/1.4`. Les figures ont un padding de 8 px entre bordure et image, la carte profil 12 px.

## Components

### Buttons
- **Shape :** pilule (9999 px).
- **Primary :** fond givré (`texte-givre`) sur texte nuit, 500, `px-6 py-3.5` (24 / 14 px ; `py-3` sur la fiche). Icône flèche 16 px qui glisse de 2 px au survol. Survol : fond `bleu-signal`. Actif : `scale(0.98)`. Transition limitée à `background-color, transform`.
- **Secondary :** bordure blanc 15 %, fond `surface-ardoise/40` (hero) ou `nuit/60` (scène), texte givré. Survol : bordure blanc 40 %. Mêmes padding et actif.
- **Nav CTA :** primary réduit à `px-4 py-1.5`, 14 px.
- **Lien texte :** 14 px 500 `bleu-signal`, flèche 14 px, survol `vert-en-ligne`.
- **En attente :** pilule en pointillé `bleu-signal/40`, texte `bleu-signal/90`, sans survol (« Bientôt en ligne » sur la fiche).
- **Focus :** `outline: 2px solid bleu-signal`, décalage 3 px, rayon 6 px, partout.

### Chips
- **Techno :** pilule, bordure blanc 10 %, fond nuit 70 % (scène) ou ardoise 60 % (fiche), mono 12 px, texte givré 85 %, `px-3 py-1`. Aucun état.
- **Contact secondaire :** pilule, bordure blanc 10 %, texte sourdine 14 px, icône 16 px, `px-4 py-2` ; survol texte givré et bordure blanc 30 %.
- **Filtres projets :** conteneur pilule `border-filet-ardoise bg-surface/60 p-1` ; onglet `px-4 py-2` 14 px ; l'actif est une pilule givrée partagée (`layoutId`, ressort 420 / 34) sous un texte nuit, les autres en sourdine.

### Status Pill (signature)
La LED porte une vraie information. Pilule mono 11 px capitales 0.16em, fond nuit 60 %, bordure 1 px de la couleur d'état à 30 %, point 6 px avec halo `0 0 10px`. Quatre états et quatre seuls : **En ligne** vert, **Projet interne** ambre, **Bientôt en ligne** bleu, **Code public** givré 80 % sans halo et bordure blanc 15 %. La pastille « Disponible » de la carte profil suit la même grammaire (vert, 10 px, 0.14em).

### Cards / Containers
- **Carte profil :** 24 px, bordure blanc 10 %, `surface-ardoise/60`, `backdrop-blur-xl`, `p-3`, ombre « carte posée ». Photo 224 px en 16 px avec voile `from-surface` en bas ; nom 1.25 rem 700 ; trois tuiles stats en 12 px (`nuit/60`, bordure blanc 5 %, valeur 1.5 rem tabulaire, libellé 11 px) ; pied séparé par un filet blanc 5 % avec icônes rondes 36 px et lien texte.
- **Média de scène :** 24 px, bordure blanc 10 %, ardoise 60 %, `p-2`, ombre « média posé », image 16/10 en 16 px.
- **Emplacement en attente :** 24 px, bordure pointillée blanc 15 %, nuit 40 %, icône 20 px + label mono « Captures à venir ». Jamais une capture inventée.
- **Tuile certificat :** 16 px, bordure blanc 10 %, ardoise 60 %, `p-2`, 176 px de large, survol bordure `bleu-signal/50`.
- **Carte projet suivant (fiche) :** 24 px, bordure blanc 10 %, ardoise 50 %, `px-6 py-6`, survol bordure blanc 25 %.

### Inputs / Fields
Le site n'a aucun champ de saisie ; le contact passe par des liens (mailto, WhatsApp, LinkedIn). Ne pas en inventer.

### Navigation
- **Nav pilule :** `fixed top-4`, centrée, `max-w-4xl`, `backdrop-blur-xl`. Repos : `surface-ardoise/40`, bordure blanc 5 %. Scrollée (> 40 px) : `nuit/80`, `filet-ardoise`, ombre nav. Entrée : `y -80 → 0`, 0.7 s, délai 0.3 s, courbe `[0.22, 1, 0.36, 1]`.
- **Marque :** pastille MF 28 px (`bleu/15`, bordure `bleu/30`, mono 12 px 700 bleu ; survol fond bleu texte nuit) + `mohamed.faye` mono 14 px.
- **Liens :** 14 px, `px-3.5 py-1.5`, sourdine, survol givré ; l'actif (IntersectionObserver, marge -40 % / -55 %) porte une pilule blanc 5 % bordure blanc 10 % partagée par `layoutId` (ressort 400 / 30).
- **Mobile :** bouton Menu / X 20 px ; panneau 16 px `nuit/95`, bordure `filet-ardoise`, `shadow-2xl`, `p-2`, entrées mono 14 px en 12 px avec chevron bleu, CTA bleu plein en 12 px. Entrée / sortie 0.2 s en `y -8, scale 0.98`.
- **Barre de retour (fiche) :** `sticky top-0`, 64 px, `nuit/70`, `backdrop-blur-xl`, filet bas blanc 6 %, « ← Projets » à gauche, marque à droite.

### Scène projet (signature)
Article collant de `100dvh`, fond nuit, filet haut blanc 6 %, nappe `.scene-wash` avec `--wash-a`, `--wash-b` et un point focal `--wash-x` / `--wash-y` propre au projet (les couleurs de nappe sont toujours prises dans bleu, bleu clair, vert, ambre), voile bas `from-nuit/90` sur la moitié inférieure. Contenu 7 + 5 aligné en bas : pastille d'état + contexte mono, titre masqué, résumé, chips, deux boutons ; figure à droite. Sortie sous la scène suivante : `scale 1 → 0.94`, `opacity 1 → 0.75 → 0.3`, `y 0 → -40` sur le dernier tiers du défilement ; désactivée sous reduced-motion.

### Planète de particules (signature)
`ParticleGlobe` : 1600 points sur écran large, 700 sous 640 px, répartis en spirale de Fibonacci sur une sphère, rotation liée au temps écoulé (0.000072 rad par milliseconde, donc identique à 60 et à 120 Hz) autour d'un axe incliné de -0.42 rad, projection avec une perspective légère (0.82 à 1). La profondeur pilote la taille (0.35 à 1.6 px) et l'opacité (0.06 à 0.78) ; un dégradé radial resserré sur le limbe détache la sphère du fond. Blanc majoritaire, bleu un tiers, vert 6 %. Posée derrière le nom au hero (104vh en desktop, 78vh en mobile). Les deux orbites sont tracées dans le même canvas, jamais en DOM : l'extérieure est fixe et porte un satellite de 3 px qui avance, l'intérieure est en pointillé dont seul le `lineDashOffset` défile. Les points sont groupés par couleur et par palier d'opacité (3 x 6 tampons `Float32Array` réutilisés) puis tracés en `fillRect` : 1600 chemins deviennent 18 écritures de `fillStyle`. Densité de pixels plafonnée à 1.5. Se met en pause hors écran et se fige entièrement sous `prefers-reduced-motion`.

### Timeline
Fil central 1 px en dégradé blanc 15 % éteint aux deux bouts, qui se déploie (`scaleY 0 → 1`, 1.4 s) ; nœud `.tile` rond de 36 px sur fond nuit avec point bleu 8 px et halo (ressort 260 / 18) ; chaque étape est un `.panel .schematic` posé alternativement à gauche et à droite du fil, avec une tuile d'icône 44 px par type (formation, expérience, certificat) ; l'année en filigrane 12 rem blanc 6 % occupe la moitié restée vide, jamais sous un paragraphe ; titre 1.25 à 1.875 rem, puis `lieu · période` en givré 70 % sous le titre (pas de label au-dessus), description sourdine 52ch, pièce jointe en lien texte bleu.

### Groupes de compétences
Titre 1.125 rem 600, description 14 px sourdine, liste en 10 px d'écart avec un tiret 16 px `bleu/70` avant chaque entrée. Les langages s'affichent en grand sans groupe ; les trois couches en trois colonnes séparées par des filets verticaux blanc 10 % ; réseau + certificat, puis outils, sur un filet blanc 10 %.

### Fiche projet
Route `#projet/<id>`, `max-w-6xl`, `pt-14 pb-28`. En-tête `max-w-4xl` (pastille + contexte, titre, résumé 1.25 rem givré 80 % 56ch, boutons), métadonnées en `dt` mono 11 px / `dd`, médias en 24 px sur ardoise (ou emplacement pointillé), paragraphes 65ch, listes numérotées mono tabulaire ou à tiret bleu 12 × 4 px, chips techno, carte « projet suivant ».

### Séquence boot (signature)
Écran fixe `z-100` nuit, grille 32 px blanc 3 %, halo bleu 10 % flouté 120 px. Colonne `max-w-xl` mono 14 à 16 px : en-tête `mfaye@portfolio:~` / `v2.0` en sourdine 60 %, lignes en français avec chevron bleu et `[ OK ]` vert espacé, dernière ligne givrée avec LED verte « EN LIGNE », curseur bleu 8 × 16 px pulsé, barre de progression 1 px `filet-ardoise` remplie en bleu, mention « Appuyez sur une touche pour passer » 11 px. Jouée une fois par session, passable au clic ou au clavier ; sortie `opacity 0, scale 1.08, blur 12px` en 0.7 s.

### Grammaire de motion (transversale)
- **Courbe :** `--ease-out-expo` `cubic-bezier(0.16, 1, 0.3, 1)` pour toutes les révélations ; `[0.22, 1, 0.36, 1]` pour les deux entrées de chrome (nav, sortie du boot).
- **Révélation au défilement :** `opacity 0 → 1`, `y 12 à 40 → 0`, 0.6 à 1 s, `viewport once`, seuil 0.3 à 0.6, cascades de 0.06 à 0.12 s. Le hero utilise `staggerChildren 0.12`, `delayChildren 0.15`.
- **Masque de titre :** chaque ligne monte de `110 %` (hero, 1 s) ou `105 %` (scène, 0.9 s) sous un conteneur `overflow-hidden` ; l'observateur est sur le h3, pas sur la ligne.
- **Figure de scène :** `y 40, rotate 2 → 0`, 1 s.
- **Nappe :** `wash-breathe` 16 s alterné (`scale 1 → 1.12`, `rotate 0 → 4deg`) uniquement quand `data-active="true"` (scène en vue, marge 20 %).
- **Particules :** canvas du hero, densité fonction de la surface, mis en pause hors écran par IntersectionObserver ; une seule frame fixe sous reduced-motion.
- **Orbites :** deux anneaux desktop (820 px pointillé blanc 6 %, 560 px blanc 5 % avec un satellite 8 px) en rotation 90 s / 60 s linéaire, désactivés sous reduced-motion.
- **Reduced-motion :** toutes les `initial` passent à `false`, les transformations de scène sont retirées, la nappe ne respire plus, `scroll-behavior: auto`, et le CSS force toutes les animations à 0.01 ms.

## Do's and Don'ts

### Do:
- **Do** garder le fond `#0B0F19` comme unique fond de page et de scène ; les surfaces sont des translucidités d'ardoise ou de nuit, pas de nouveaux gris.
- **Do** réserver l'ambre à l'état « Projet interne » et à la nappe MCI, le vert à « En ligne / Disponible / OK », le bleu au lien, au focus, à l'actif et à « Bientôt en ligne ».
- **Do** mettre en pilule tout ce qui se clique, en 24 px toute carte, en 16 px ce qu'elle contient.
- **Do** écrire un titre de section en Inter 700, -0.04em, interligne 0.95, avec sa nuance en seconde proposition sourdine dans le même h2.
- **Do** utiliser le mono 11 px capitales 0.16em uniquement pour une donnée courte (état, période, contexte, `dt`).
- **Do** marquer un média manquant par l'emplacement pointillé « Captures à venir » plutôt que par une image.
- **Do** utiliser `cubic-bezier(0.16, 1, 0.3, 1)` pour toute révélation, `viewport once`, et couper toute animation sous `prefers-reduced-motion`.
- **Do** rythmer les sections en `py-28` / `lg:py-40` dans un conteneur `max-w-7xl` aux gouttières 16 / 24 / 32 px.
- **Do** donner un `overflow-wrap: anywhere` et une taille mobile réduite à toute valeur longue (e-mail, numéro) pour tenir à 390 px.

### Don't:
- **Don't** utiliser de texte en dégradé ; le nom est givré puis bleu plein, jamais un `background-clip: text`.
- **Don't** poser d'étiquette, kicker ou eyebrow au-dessus d'un titre de section.
- **Don't** écrire de tiret cadratin ; les incises passent par la virgule, les deux-points ou le point médian `·`.
- **Don't** ajouter de point décoratif dans un libellé ou une pastille : un point rond dans une pastille est une LED et porte un état.
- **Don't** appliquer `filter: blur` à une nappe de scène ou à tout calque qui s'empile ; le flou reste aux halos isolés du hero, du boot et du contact.
- **Don't** inventer de capture, de vidéo, de témoignage ou de chiffre d'impact ; l'emplacement pointillé attend les vrais médias.
- **Don't** colorer un bouton au repos : le fond est givré, le bleu n'arrive qu'au survol (seule exception : le CTA du menu mobile).
- **Don't** afficher de barre de niveau ou de pourcentage de compétence.
- **Don't** introduire de mode clair, de police système en titre ou d'icône glyphe : Inter et JetBrains Mono, icônes Lucide en trait de 14 à 24 px.
- **Don't** empiler un second grain, une seconde ombre ou une bordure grise opaque sur une carte ; un filet blanc translucide suffit.

<!-- En attente (hors système) : captures et vidéos réelles pour MCI, Cabinet Mame Fary, Amsa Shop et Pencc Mi ; nouvelle photo de profil ; mise en ligne d'amsashop.com (la pastille passera de « Bientôt en ligne » à « En ligne »). -->
