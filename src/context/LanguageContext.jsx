import { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTENT } from '../data/content';
import { SITE_CONFIG, LANG_PATHS } from '../data/config';

const LanguageContext = createContext(null);

/**
 * La langue vient désormais de l'URL (/ = FR, /en = EN) afin que chaque langue
 * ait sa propre page indexable. `setLang` navigue vers la page de l'autre langue.
 */
export function LanguageProvider({ lang = SITE_CONFIG.DEFAULT_LANG, children }) {
  const navigate = useNavigate();

  const setLang = useCallback(
    (next) => {
      if (next !== lang && LANG_PATHS[next]) navigate(LANG_PATHS[next]);
    },
    [lang, navigate],
  );

  const value = useMemo(() => {
    const dict = CONTENT[lang] || CONTENT.fr;

    const t = (key) => (dict[key] !== undefined ? dict[key] : key);

    const waLink = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(dict.waMessage)}`;
    const telLink = SITE_CONFIG.PHONE_NUMBER_TEL ? `tel:${SITE_CONFIG.PHONE_NUMBER_TEL}` : null;
    const mailLink = SITE_CONFIG.EMAIL ? `mailto:${SITE_CONFIG.EMAIL}` : null;
    const igLink = SITE_CONFIG.INSTAGRAM_URL || null;

    return {
      lang,
      setLang,
      t,
      config: SITE_CONFIG,
      contacts: { waLink, telLink, mailLink, igLink },
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
