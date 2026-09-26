import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from './IconSprite';
import { useLanguage } from '../context/LanguageContext';

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
          className="mobile-menu open"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="mobile-menu-top">
            <div className="brand">
              BENADDA
              <br />
              <span>DREAMCAR</span>
            </div>
            <button type="button" className="menu-btn" aria-label="Fermer le menu" onClick={onClose}>
              <Icon name="close" />
            </button>
          </div>

          <div className="mobile-menu-links">
            {NAV_LINKS.map((link) => (
              <a key={link.key} href={link.href} onClick={onClose}>
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <a href={contacts.waLink} target="_blank" rel="noopener" className="btn btn-primary btn-block">
              <Icon name="whatsapp" className="icon btn-icon" style={{ stroke: 'none', fill: 'currentColor' }} />
              <span>{t('cta.whatsapp')}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
