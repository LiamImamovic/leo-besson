# Besson Bois et Zinc – Site Léo Besson

Site vitrine pour Léo Besson, charpentier zingueur à Andernos-les-Bains.

## Développement

- **CSS (Tailwind)** : le site utilise Tailwind en build CLI (plus le CDN). Pour générer le fichier CSS :
  - `npm install` (une fois)
  - `npm run build:css` → génère `dist/output.css`
  - `npm run watch:css` → rebuild à chaque modification
- Avant mise en ligne : lancer `npm run build:css` (ou configurer la même commande en build sur Vercel).
