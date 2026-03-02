# SEO et formulaire de contact

## Pourquoi rester en HTML / JS (sans Next.js) ?

Pour une **vitrine one-page** comme celle-ci :

- **SEO** : Un bon référencement est déjà obtenu avec le HTML sémantique, les balises meta, Open Graph, le JSON-LD et un hébergement rapide. Next.js apporte surtout un plus pour les sites multi-pages ou au contenu très dynamique.
- **Formulaire** : Il peut être **100 % fonctionnel** sans backend ni Node.js, via [Formspree](https://formspree.io/) (ou Netlify Forms, Getform, etc.).
- **Simplicité** : Pas de build, pas de Node, déploiement en un fichier sur n’importe quel hébergeur (Netlify, GitHub Pages, OVH, etc.).

Passer à Next.js aurait du sens si vous ajoutiez par exemple : blog, nombreuses pages, back-office, ou besoin d’i18n avancé.

---

## Formulaire de contact (Formspree)

1. Créez un compte sur [formspree.io](https://formspree.io/).
2. Créez un nouveau formulaire et récupérez l’ID (ex. `xyzwabcd`).
3. Dans `index.html`, remplacez `YOUR_FORM_ID` dans l’attribut `action` du formulaire :
   ```html
   action="https://formspree.io/f/VOTRE_ID"
   ```
4. Les messages arriveront par email. Vous pouvez configurer redirection, email de réponse automatique, etc. dans le tableau de bord Formspree.

---

## À faire pour le SEO en production

1. **URL du site**  
   Dans `index.html`, remplacez toutes les occurrences de `https://www.leobesson-bois-zinc.fr/` par l’URL réelle du site (balise `canonical`, `og:url`, `og:image`, JSON-LD).

2. **Image de partage (Open Graph)**  
   Ajoutez une image (ex. 1200×630 px) à la racine du site (ex. `og-image.jpg`) et vérifiez que l’URL dans `og:image` et dans le JSON-LD pointe vers cette image.

3. **Fichiers optionnels sur le serveur**
   - `sitemap.xml` : liste l’URL de la page d’accueil.
   - `robots.txt` : par exemple `User-agent: *` et `Allow: /` (ou laisser par défaut).

4. **Hébergement**  
   Utilisez un hébergement rapide (Netlify, Vercel, etc.) et, si possible, HTTPS.

Une fois l’URL réelle et Formspree configurés, vous avez un site prêt pour la production avec un bon SEO et un formulaire fonctionnel, sans Next.js.
