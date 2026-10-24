import HomePage from './pages/HomePage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import { LANGS, PAGE_PATHS, SERVICE_IDS, routePath } from './data/pages.js';

// Une route = une page HTML statique générée au build, pour chaque langue :
//   /  /en/  /ar/                         -> accueil
//   /transfert-aeroport-oran/ …           -> pages de service (FR / EN / AR)
export const routes = [
  ...LANGS.map((lang) => ({
    path: routePath(PAGE_PATHS.home[lang]),
    element: <HomePage lang={lang} />,
  })),
  ...SERVICE_IDS.flatMap((id) =>
    LANGS.map((lang) => ({
      path: routePath(PAGE_PATHS[id][lang]),
      element: <ServicePage lang={lang} id={id} />,
    })),
  ),
];
