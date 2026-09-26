import { createContext, useContext, useMemo, useState } from 'react';
import { CONTENT } from '../data/content';
import { SITE_CONFIG } from '../data/config';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(SITE_CONFIG.DEFAULT_LANG);

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
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
