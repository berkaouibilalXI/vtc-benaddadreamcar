### VTC
## Build & SEO

Le site est pré-rendu en HTML statique avec [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) :

| URL    | Fichier généré        | Langue |
| ------ | --------------------- | ------ |
| `/`    | `dist/index.html`     | FR     |
| `/en/` | `dist/en/index.html`  | EN     |

```bash
pnpm dev        # développement (rendu client)
pnpm build      # pré-rendu statique -> dist/
pnpm images     # régénère les WebP / og.jpg depuis raw/images/
```

- Balises `<head>` (title, description, canonical, hreflang, Open Graph, JSON-LD) : `src/seo/Seo.jsx`
- Textes par langue : `src/data/content.js` (clés `seo.*`)
- URL du site, téléphone, etc. : `src/data/config.js`
- Routes (une par langue) : `src/routes.jsx` — pensez à mettre à jour `public/sitemap.xml` si vous en ajoutez.
- Images : ne mettez **pas** les originaux lourds dans `public/` ; placez-les dans `raw/images/` puis lancez `pnpm images`.
- `.htaccess` (HTTPS, 404, cache, compression) est à la racine du dépôt et doit être présent à la racine du serveur.
