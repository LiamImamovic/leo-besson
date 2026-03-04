# Préparer le site pour la production – SEO et checklist

Guide pour mettre en ligne **bessonboisetzinc.fr** avec un bon référencement et une bonne expérience utilisateur.

---

## 1. SEO – Déjà en place dans `index.html`

- **Title** et **meta description** : alignés sur le cœur de métier (charpente, ossature bois, zinguerie, aménagement bois, Andernos-les-Bains).
- **Canonical** : `https://www.bessonboisetzinc.fr/`
- **Open Graph** (Facebook, LinkedIn, etc.) : titre, description, image, URL.
- **Twitter Card** : `summary_large_image` avec titre et description.
- **JSON-LD** : fiche `LocalBusiness` (nom, description, téléphone, email, adresse, zone).
- **robots** : `index, follow`.
- **sitemap.xml** et **robots.txt** : présents à la racine du projet (à déployer avec le site).

---

## 2. À faire avant / au moment de la mise en production

### 2.1 Image de partage (Open Graph)

- Créer une image **1200 × 630 px** (format paysage) : logo, nom, slogan ou photo de réalisation.
- La nommer **`og-image.jpg`** et la placer **à la racine du site** (à côté de `index.html`).
- L’URL utilisée dans le HTML est déjà : `https://www.bessonboisetzinc.fr/og-image.jpg`.

Sans cette image, les partages sur réseaux sociaux auront une vignette vide ou par défaut.

### 2.2 Favicon (optionnel mais recommandé)

- Générer un favicon (icône 32×32 ou multi-tailles) à partir du logo.
- Ajouter dans le `<head>` de `index.html` :
  ```html
  <link rel="icon" type="image/png" href="/favicon.png" />
  ```
- Déposer `favicon.png` (ou `.ico`) à la racine du site.

### 2.3 Formulaire (Formspree)

- Déjà configuré : `action="https://formspree.io/f/mbdanznr"`.
- Vérifier dans le tableau de bord Formspree : email de réception, notifications, éventuelle redirection après envoi.

### 2.4 URL du site

- Toutes les URLs du site pointent vers **`https://www.bessonboisetzinc.fr/`** (canonical, og:url, image, JSON-LD, sitemap).
- Si vous changez de domaine ou de préfixe (www / non-www), faire une recherche dans tout le projet et remplacer cette URL partout.

---

## 3. Fichiers à déployer à la racine

| Fichier           | Rôle                                                              |
| ----------------- | ----------------------------------------------------------------- |
| `index.html`      | Page unique du site                                               |
| `sitemap.xml`     | Indique à Google l’URL de la page                                 |
| `robots.txt`      | Autorise l’indexation et indique l’emplacement du sitemap         |
| `og-image.jpg`    | Image de partage (à créer, 1200×630 px)                           |
| `logo-besson.png` | Déjà référencé dans la page ; à placer comme indiqué dans le HTML |
| `favicon.png`     | Optionnel                                                         |

---

## 4. Hébergement et technique

- **HTTPS** : activer le certificat SSL (obligatoire pour un site pro et pour certaines fonctionnalités).
- **Hébergeur** : Netlify, Vercel, GitHub Pages, OVH, etc. — choisir un hébergement rapide et fiable.
- **Domaine** : pointer le nom de domaine (ou sous-domaine) vers l’hébergeur et vérifier que `https://www.bessonboisetzinc.fr/` répond bien.

---

## 5. Après la mise en ligne

1. **Google Search Console** : ajouter la propriété `https://www.bessonboisetzinc.fr`, soumettre le sitemap (`https://www.bessonboisetzinc.fr/sitemap.xml`).
2. **Test des partages** : partager l’URL sur Facebook (debugger Facebook) ou LinkedIn pour vérifier titre, description et image.
3. **Test du formulaire** : envoyer un message de test depuis le site et vérifier la réception sur Formspree et par email.
4. **Mobile** : vérifier sur téléphone que la page s’affiche bien et que le formulaire fonctionne.

---

## 6. Résumé rapide

| Action                    | Statut                        |
| ------------------------- | ----------------------------- |
| Meta title / description  | OK                            |
| Open Graph / Twitter      | OK (alignés au contenu)       |
| JSON-LD LocalBusiness     | OK                            |
| sitemap.xml               | Créé                          |
| robots.txt                | Créé                          |
| Formspree                 | Configuré (mbdanznr)          |
| **og-image.jpg 1200×630** | À créer et déposer            |
| Favicon                   | Optionnel                     |
| HTTPS + domaine           | À configurer chez l’hébergeur |
| Search Console + sitemap  | À faire après mise en ligne   |

Une fois **og-image.jpg** ajoutée et le site déployé en HTTPS, le site est prêt pour la production avec un SEO solide pour une vitrine one-page.
l
