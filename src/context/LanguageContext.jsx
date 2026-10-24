import { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTENT } from '../data/content';
import { SITE_CONFIG } from '../data/config';
import { HOME_PATHS, PAGE_PATHS, RTL_LANGS } from '../data/pages';

const LanguageContext = createContext(null);

/**
 * La langue et la page viennent de l'URL (/ = FR, /en/ = EN, /ar/ = AR, + une URL
 * par service et par langue) afin que chaque version soit indexable séparément.
 *
 *  - `pageId`     : 'home' | 'airport' | 'hotel' | …
 *  - `paths`      : les URL de la page courante dans chaque langue (sélecteur + hreflang)
 *  - `homeHref()` : lien vers une ancre de l'accueil de la langue courante (utilisable depuis
 *                   n'importe quelle page : /en/#services)
 *  - `waMessage`  : message WhatsApp pré-rempli (propre à la page si fourni)
 */
export function LanguageProvider({ lang = SITE_CONFIG.DEFAULT_LANG, pageId = 'home', waMessage, children }) {
  const navigate = useNavigate();

  const setLang = useCallback(
    (next) => {
      const target = PAGE_PATHS[pageId]?.[next];
      if (next !== lang && target) navigate(target);
    },
    [lang, pageId, navigate],
  );

  const value = useMemo(() => {
    const dict = CONTENT[lang] || CONTENT.fr;

    const t = (key) => (dict[key] !== undefined ? dict[key] : key);

    const message = waMessage || dict.waMessage;
    const waLink = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const telLink = SITE_CONFIG.PHONE_NUMBER_TEL ? `tel:${SITE_CONFIG.PHONE_NUMBER_TEL}` : null;
    const mailLink = SITE_CONFIG.EMAIL ? `mailto:${SITE_CONFIG.EMAIL}` : null;
    const igLink = SITE_CONFIG.INSTAGRAM_URL || null;

    return {
      lang,
      dir: RTL_LANGS.includes(lang) ? 'rtl' : 'ltr',
      pageId,
      paths: PAGE_PATHS[pageId],
      homeHref: (hash = '') => `${HOME_PATHS[lang]}${hash}`,
      setLang,
      t,
      config: SITE_CONFIG,
      contacts: { waLink, telLink, mailLink, igLink },
    };
  }, [lang, pageId, waMessage, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
