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
