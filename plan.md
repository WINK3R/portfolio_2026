Plan

1. Ajuster la navigation et le hero uniquement sur mobile pour éviter les débordements et garder les bons liens.
2. Réduire les paddings, rayons, tailles d'images et titres sur mobile dans les sections de la home.
3. Améliorer les pages détail projet et compétence sur mobile sans modifier les breakpoints desktop.
4. Vérifier avec le lint.

## Historique precedent

1. Remplacer les references aux realisations par des badges de taches.
2. Ajouter les taches demandees pour Cikaba Mastere, Alternance Cikaba et INRAE.
3. Preciser dans INRAE l'embauche de 2 mois pour la version mobile Flutter.
4. Relancer lint/build.

## Historique precedent

1. Supprimer l'effet de hover des cartes experiences.
2. Passer chaque experience en carte pleine largeur avec details visibles a droite.
3. Reordonner les experiences de la plus recente a la plus ancienne.
4. Relancer lint/build.

## Historique precedent

1. Structurer les cartes d'experience avec un premier niveau de lecture: periode, poste, lieu et logo.
2. Ajouter un deuxieme niveau visible au survol/focus: responsabilite, statut, missions, liens projets et competences.
3. Garder les dates exactes a preciser lorsque l'information n'est pas fournie.
4. Relancer lint/build.

1. Ajouter un composant `ExperiencesSection` avec les experiences fournies.
2. Inserer la section sous les projets sur la page d'accueil.
3. Pointer l'entree de navigation "Experiences" vers l'ancre de la nouvelle section.
4. Lancer les verifications du projet.

1. Enrichir la fiche Gliint avec les details de conception Figma, UI/UX, integrations API, optimisation de code, abonnements Stripe et securite Supabase/RLS.
2. Ajouter Stripe a la stack affichee sur la page detail projet.
3. Verifier que les donnees JSON restent valides et que le lint/build passent.

## Couleurs des competences

1. Add one accent color per skill in the shared skill data.
2. Expose the accent color in the `Skill` type.
3. Reuse that color for the skill tile square and the detail page banner tint.
4. Run lint/build checks for the touched Next.js code.

## Icones des competences

1. Install the Heroicons React package.
2. Add one icon key per skill in the shared skill data.
3. Create a small Heroicons registry component for skill icons.
4. Render each skill icon in the tile and detail page banner.
5. Run lint/build checks.

## Screenshots Gliint

1. Add the 10 Gliint screenshot paths to the project data.
2. Expose screenshots as an optional project field.
3. Render screenshots in the project detail marquee instead of gray placeholders when available.
4. Run lint/build checks.

## Preview screenshots projet

1. Move the interactive project screenshots marquee into a client component.
2. Open the clicked screenshot in a fullscreen preview.
3. Add a visible close button and Escape/backdrop closing.
4. Run lint/build checks.

## Screenshots JustMusic

1. Add JustMusic screenshot paths to the project data.
2. Add a phone screenshot display mode to preserve the 390x844 ratio at a reduced size.
3. Pass the display mode to the project screenshots marquee.
4. Run lint/build checks.

## Redaction SFHelper

1. Replace SFHelper placeholder copy with a detailed professional project write-up.
2. Set SFHelper status to `detailled`.
3. Add the confirmed stack: Next.js and Vercel.
4. Link relevant skills: Front-end, Architecture logicielle, Resolution de problemes, Deploiement & DevOps, Autonomie.
5. Validate JSON, then run lint/build checks.

## Redaction Canap

1. Replace Canap placeholder copy with a detailed professional project write-up.
2. Set Canap status to `detailled` and screenshots to phone display mode.
3. Add stack entries: Swift, Firebase, TMDB API.
4. Link relevant skills: Front-end, Back-end, Design UI/UX, Architecture logicielle, Resolution de problemes.
5. Validate JSON, then run lint/build checks.
