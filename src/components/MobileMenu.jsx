import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './Icon';
import { useLanguage } from '../context/LanguageContext';
import { btnPrimary, btnBlock } from '../styles/ui';

const NAV_LINKS = [
  { hash: '#hero', key: 'nav.home' },
  { hash: '#services', key: 'nav.services' },
  { hash: '#fleet', key: 'nav.fleet' },
  { hash: '#partners', key: 'nav.partners' },
  { hash: '#contact', key: 'nav.contact' },
];

export default function MobileMenu({ open, onClose }) {
  const { t, dir, homeHref, contacts } = useLanguage();
  // Le panneau glisse depuis le bord de fin : droite en LTR, gauche en RTL (arabe)
  const offscreen = dir === 'rtl' ? '-100%' : '100%';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 flex flex-col bg-white p-6 desktop:hidden"
          initial={{ x: offscreen }}
          animate={{ x: 0 }}
          exit={{ x: offscreen }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex h-14 items-center justify-between">
            <div className="font-display text-[1.05rem] font-extrabold leading-none tracking-[0.02em]">
              <img src="/logo-black.webp" alt={t('nav.logoAlt')} width={75} height={52} />
            </div>
            <button type="button" className="p-1.5" aria-label={t('nav.closeMenu')} onClick={onClose}>
              <Icon name="close" className="h-6.5 w-6.5 shrink-0" />
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.key} href={homeHref(link.hash)} onClick={onClose} className="font-display text-2xl font-bold">
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <a href={contacts.waLink} target="_blank" rel="noopener" className={`${btnPrimary} ${btnBlock}`}>
              <Icon name="whatsapp" className="h-4.5 w-4.5 shrink-0" />
              <span>{t('cta.whatsapp')}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
