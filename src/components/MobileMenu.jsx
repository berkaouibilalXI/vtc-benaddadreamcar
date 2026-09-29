import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './IconSprite';
import { useLanguage } from '../context/LanguageContext';
import { btnPrimary, btnBlock } from '../styles/ui';

const NAV_LINKS = [
  { href: '#hero', key: 'nav.home' },
  { href: '#services', key: 'nav.services' },
  { href: '#fleet', key: 'nav.fleet' },
  { href: '#partners', key: 'nav.partners' },
  { href: '#contact', key: 'nav.contact' },
];

export default function MobileMenu({ open, onClose }) {
  const { t, contacts } = useLanguage();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-white p-6 desktop:hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex h-14 items-center justify-between">
            <div className="font-display text-[1.05rem] font-extrabold leading-none tracking-[0.02em]">
              <img src="/logo-black.png" alt="LOGO" width={75}/>
            </div>
            <button type="button" className="p-1.5" aria-label="Fermer le menu" onClick={onClose}>
              <Icon name="close" className="h-6.5 w-6.5 shrink-0 stroke-current fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]" />
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.key} href={link.href} onClick={onClose} className="font-display text-2xl font-bold">
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <a href={contacts.waLink} target="_blank" rel="noopener" className={`${btnPrimary} ${btnBlock}`}>
              <Icon
                name="whatsapp"
                className="h-[18px] w-[18px] shrink-0"
                style={{ stroke: 'none', fill: 'currentColor' }}
              />
              <span>{t('cta.whatsapp')}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
