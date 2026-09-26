import { Icon } from './IconSprite';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { href: '#hero', key: 'nav.home' },
  { href: '#services', key: 'nav.services' },
  { href: '#fleet', key: 'nav.fleet' },
  { href: '#partners', key: 'nav.partners' },
  { href: '#contact', key: 'nav.contact' },
];

export default function Navbar({ onOpenMenu }) {
  const { t, lang, setLang, contacts } = useLanguage();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#hero" className="brand">
          BENADDA
          <br />
          <span>DREAMCAR</span>
        </a>

        <div className="nav-desktop-links">
          {NAV_LINKS.map((link) => (
            <a key={link.key} href={link.href}>
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Langue / Language">
            <button type="button" className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
              FR
            </button>
            <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
          </div>

          <a href={contacts.waLink} target="_blank" rel="noopener" className="btn btn-primary btn-sm" id="navWaBtn">
            <span>{t('cta.whatsapp')}</span>
          </a>

          <button type="button" className="menu-btn" aria-label="Ouvrir le menu" aria-expanded="false" onClick={onOpenMenu}>
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}
