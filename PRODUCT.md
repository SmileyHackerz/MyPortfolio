# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Deux audiences à parts égales, confirmées par Mohamed :

- **Recruteurs et responsables techniques** (Dakar ou à distance) qui évaluent un développeur junior pour un stage, une alternance ou un premier poste. Ils arrivent souvent depuis LinkedIn ou GitHub, scannent en moins d'une minute, et veulent des preuves : projets réels, stack maîtrisée, capacité à livrer.
- **Clients de petites entreprises** (cabinet médical, boutique, PME) qui veulent un site ou une application et cherchent quelqu'un de fiable qui a déjà livré pour des structures comparables. Souvent sur mobile, peu techniques, sensibles au rendu visuel et à la preuve « ça existe, ça tourne ».

Action prioritaire attendue du visiteur : **découvrir Mohamed et ses projets**. Le contact vient ensuite (e-mail, WhatsApp, LinkedIn) ; le CV est secondaire.

## Product Purpose

Portfolio personnel de Mohamed Faye, développeur full-stack, étudiant en Licence 3 Informatique à l'École Supérieure Polytechnique (ESP) de Dakar, titulaire d'un DUT Informatique (2024-2026).

Le site existe pour que quelqu'un qui ne le connaît pas comprenne en une visite : qui il est, ce qu'il sait construire, et qu'il a déjà livré des applications complètes répondant à des besoins réels. Succès = le visiteur a vu au moins un projet en détail et sait comment le joindre.

## Positioning

Un étudiant qui ne présente pas que des projets d'école : il a conçu et livré seul des applications full-stack (React + NestJS + PostgreSQL + Docker) pour de vraies structures, sur de vrais besoins : la main courante des incidents d'Autoroutes du Sénégal, la gestion d'un cabinet dentaire, la vitrine d'une boutique. Il comprend aussi ce qu'il y a sous l'application (réseaux, formation HCIA-Datacom, intérêt cybersécurité).

Angle confirmé : **full-stack, projets personnels et projets réels à forte envergure répondant à un besoin réel.**

## Operating Context

- Site vitrine statique une page, en français, hébergé en front seul (Vite build). Pas de backend.
- Visité principalement depuis un lien LinkedIn / GitHub / message WhatsApp ; forte part de mobile pour l'audience clients.
- Les projets clients ne sont pas tous consultables publiquement : MCI tourne sur le serveur interne d'ADS (pas de démo), Amsa Shop n'est pas encore en ligne (amsashop.com prévu), Pencc Mi est en local (PHP/MySQL, pas déployé). Cabinet Mame Fary est en ligne (cabinetdentairemamefary.com). JammLine a une démo Vercel.
- Le code des projets clients n'est pas publiable ; seuls JammLine, Focus Bot et Pencc Mi ont un dépôt GitHub public.

## Capabilities and Constraints

- Contenu : profil, 6 projets (MCI, Cabinet Mame Fary, Amsa Shop, Pencc Mi, JammLine, Focus Bot), compétences par familles sans pourcentages et avec les logos des technologies, parcours dans l'ordre chronologique (Bac 2024, début du DUT 2024, stage ADS mai-juillet 2026, obtention du DUT 2026, Licence 3 depuis 2026), section diplômes et certifications (DUT, HCIA-Datacom, Bac S2), contact. La formation HCIA figure dans les diplômes, pas dans les compétences ni dans la timeline.
- Chaque projet doit pouvoir être **montré** même sans démo : captures et courte vidéo d'écran dans une fiche projet. Les médias projets arrivent après (Mohamed les fournit).
- Stack imposée par le code existant : React 19, Vite 6, TypeScript, Tailwind CSS 4, Motion. Pas de framework serveur.
- Un écran d'entrée « séquence boot terminal » est voulu (remplace l'ancien « Veux-tu entrer dans mon monde ? OUI/NON »), jouée une fois par session, passable d'un clic.
- Le hero affiche le nom (MOHAMED FAYE) plutôt qu'une accroche. La carte à sa droite est une session shell (`whoami`, `cat formation.txt`, `stack --principale`, `status`) et non le portrait : choix de Mohamed le 22/09/2026, pour que la photo n'apparaisse qu'une fois, dans « À propos ». Les commandes et leurs réponses doivent rester vraies.
- Terminologie : « Développeur full-stack », « Licence 3 Informatique », « ESP Dakar », « DUT Informatique », « Formation HCIA-Datacom V1.0 (Huawei Talent Online) » : c'est un certificat de formation, pas la certification Huawei officielle ; ne pas le présenter comme tel.
- Langue du site : français uniquement.

## Brand Commitments

- Nom : Mohamed Faye. Pseudo GitHub : SmileyHackerz.
- Palette conservée à la demande de Mohamed : fond `#0B0F19`, surface `#111827`, bleu `#3B82F6`, vert `#22C55E`, texte `#E5E7EB`, muted `#9CA3AF`, bordure `#1F2937`. Thème sombre uniquement.
- Identité « terminal / tech » assumée (labels mono, prompt `mfaye@portfolio:~`).
- Références visuelles rendues contraignantes par Mohamed : **Futuristic Space (VELOS, aura.build)** en premier pour le layout, l'ambiance et les animations ; **Nova Studio (aura.build)** en second pour la carte profil bento. Aurora explicitement rejeté.
- Demande explicite : « enlever le style slop par défaut », « une vraie identité visuelle », « n'aie pas peur d'essayer de nouvelles choses ».

## Evidence on Hand

- Photo de profil : `public/profile.webp`, portrait fourni par Mohamed le 22/09/2026 (512x593). Utilisée uniquement dans « À propos ».
- Captures : `public/projects-jammline.png` seulement. Aucune capture pour MCI, Cabinet Mame Fary, Amsa Shop, Pencc Mi, Focus Bot : ne pas en inventer, l'emplacement « Captures à venir » s'affiche à la place.
- Certificat de formation Huawei : `public/certificat-hcia-datacom.webp` (code EBG20250504000231, émis le 2025-05-04).
- CV : `public/cv.pdf`.
- Code source des projets disponible localement (stacks vérifiées) : `C:\Users\fayem\Desktop\mf_mci`, `C:\Users\fayem\Documents\2goatsdev\Cabinetmamefary`, `C:\Users\fayem\Documents\2goatsdev\amsa-shop`, `C:\xampp\htdocs\Pencc Mi`.
- Pas de témoignages clients, pas de chiffres d'impact : ne pas en fabriquer.

## Product Principles

1. **Montrer avant de dire.** Un projet se juge sur ce qu'on en voit : captures, vidéo, fiche détaillée. Pas de barres de compétences en pourcentage, pas de chiffres inventés.
2. **Le réel pèse plus que l'école.** MCI, le cabinet et la boutique passent avant les projets académiques ; chaque fiche dit pour qui, pourquoi, et ce qui a été livré.
3. **Lisible par un non-technique, crédible pour un technique.** Le client comprend l'usage, le recruteur voit la stack et l'architecture.
4. **Honnêteté des statuts.** « En ligne », « Bientôt en ligne », « Projet interne » : chaque projet porte son vrai état.
5. **Mobile d'abord pour la lecture, desktop pour le spectacle.** Les effets ne doivent jamais empêcher de lire le contenu sur un téléphone.
