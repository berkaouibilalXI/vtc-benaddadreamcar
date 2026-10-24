/**
 * Carte des pages du site : une URL par page ET par langue (toutes pré-rendues).
 * Fichier en JS pur (sans JSX) : il est aussi lu par scripts/generate-sitemap.mjs.
 */
export const LANGS = ['fr', 'en', 'ar'];
export const DEFAULT_LANG = 'fr';

export const LANG_LABELS = { fr: 'FR', en: 'EN', ar: 'AR' };
export const LANG_NAMES = { fr: 'Français', en: 'English', ar: 'العربية' };
export const OG_LOCALES = { fr: 'fr_FR', en: 'en_US', ar: 'ar_AR' };
export const RTL_LANGS = ['ar'];

export const HOME_PATHS = { fr: '/', en: '/en/', ar: '/ar/' };

export const SERVICE_IDS = ['airport', 'hotel', 'business', 'disposal', 'outoftown'];

export const SERVICE_PATHS = {
  airport: {
    fr: '/transfert-aeroport-oran/',
    en: '/en/oran-airport-transfer/',
    ar: '/ar/oran-airport-transfer/',
  },
  hotel: {
    fr: '/transfert-hotel-oran/',
    en: '/en/oran-hotel-transfer/',
    ar: '/ar/oran-hotel-transfer/',
  },
  business: {
    fr: '/chauffeur-prive-entreprise-oran/',
    en: '/en/oran-business-chauffeur/',
    ar: '/ar/oran-business-chauffeur/',
  },
  disposal: {
    fr: '/chauffeur-a-disposition-oran/',
    en: '/en/oran-chauffeur-at-disposal/',
    ar: '/ar/oran-chauffeur-at-disposal/',
  },
  outoftown: {
    fr: '/courses-hors-wilaya-oran/',
    en: '/en/oran-intercity-chauffeur/',
    ar: '/ar/oran-intercity-chauffeur/',
  },
};

export const PAGE_PATHS = { home: HOME_PATHS, ...SERVICE_PATHS };
export const PAGE_IDS = Object.keys(PAGE_PATHS);

/** '/en/oran-airport-transfer/' -> '/en/oran-airport-transfer' (format attendu par react-router) */
export const routePath = (p) => (p === '/' ? '/' : p.replace(/\/$/, ''));
