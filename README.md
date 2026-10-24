### VTC
## Build & SEO

Le site est pré-rendu en HTML statique avec [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg).
**6 pages × 3 langues (FR / EN / AR) = 18 URLs**, chacune avec son propre `<title>`, sa description,
ses balises canonical / hreflang / Open Graph et ses données structurées :

| Page                  | FR                                | EN                                     | AR                                     |
| --------------------- | --------------------------------- | -------------------------------------- | -------------------------------------- |
| Accueil               | `/`                               | `/en/`                                 | `/ar/`                                 |
| Transfert aéroport    | `/transfert-aeroport-oran/`       | `/en/oran-airport-transfer/`           | `/ar/oran-airport-transfer/`           |
| Transfert hôtel       | `/transfert-hotel-oran/`          | `/en/oran-hotel-transfer/`             | `/ar/oran-hotel-transfer/`             |
| Déplacements pro      | `/chauffeur-prive-entreprise-oran/` | `/en/oran-business-chauffeur/`       | `/ar/oran-business-chauffeur/`         |
| Chauffeur à disposition | `/chauffeur-a-disposition-oran/` | `/en/oran-chauffeur-at-disposal/`      | `/ar/oran-chauffeur-at-disposal/`      |
| Courses hors wilaya   | `/courses-hors-wilaya-oran/`      | `/en/oran-intercity-chauffeur/`        | `/ar/oran-intercity-chauffeur/`        |

```bash
pnpm dev        # développement (rendu client)
pnpm build      # génère sitemap.xml puis pré-rend toutes les pages -> dist/
pnpm images     # régénère les WebP / og.jpg depuis raw/images/
```

### Où modifier quoi

| Je veux…                                   | Fichier                                  |
| ------------------------------------------ | ---------------------------------------- |
| Changer un texte de l'accueil (FR/EN/AR)   | `src/data/content.js`                    |
| Changer le texte / la FAQ d'une page service | `src/data/servicePages.js`             |
| Ajouter une page ou une langue (+ sitemap) | `src/data/pages.js` + `src/routes.jsx`   |
| Téléphone, URL du site, etc.               | `src/data/config.js`                     |
| Title, hreflang, JSON-LD                   | `src/seo/Seo.jsx`                        |
| Icônes (lucide-react)                      | `src/components/Icon.jsx`                |

- `public/sitemap.xml` est **généré** à chaque `pnpm build` à partir de `src/data/pages.js`.
- Arabe : `dir="rtl"` est posé sur `<html>` ; utilisez les classes logiques Tailwind (`ms-`, `me-`, `start-`, `end-`)
  et `rtl:` pour inverser les icônes directionnelles — évitez `ml-`, `mr-`, `left-`, `right-`.
- Images : ne mettez **pas** les originaux lourds dans `public/` ; placez-les dans `raw/images/` puis lancez `pnpm images`.
- `.htaccess` (HTTPS, 404, cache, compression) est à la racine du dépôt et doit être présent à la racine du serveur.
