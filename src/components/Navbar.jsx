import { Icon } from './IconSprite';
import { useLanguage } from '../context/LanguageContext';
import { container, btnPrimary, btnSm, btnIcon } from '../styles/ui';

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
    <nav className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-start gap-6`}>
        <a href="#hero" className="font-display text-[1.05rem] font-extrabold leading-none tracking-[0.02em]">
          <img src="/logo-black.png" alt="LOGO" width={80}/>
        </a>

        <div className="hidden flex-1 items-center gap-8 text-[0.9rem] font-semibold desktop:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="border-b-2 border-transparent py-2 transition-colors hover:border-red"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div
            className="flex items-center overflow-hidden rounded-full border border-line font-display text-[0.8rem] font-bold"
            role="group"
            aria-label="Langue / Language"
          >
            <button
              type="button"
              className={`px-3 py-[7px] ${lang === 'fr' ? 'bg-ink text-white' : 'text-grey-text'}`}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className={`px-3 py-[7px] ${lang === 'en' ? 'bg-ink text-white' : 'text-grey-text'}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <a
            href={contacts.waLink}
            target="_blank"
            rel="noopener"
            className={`hidden desktop:inline-flex ${btnPrimary} ${btnSm}`}
          >
            <span>{t('cta.whatsapp')}</span>
          </a>

          <button
            type="button"
            className="flex p-1.5 desktop:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded="false"
            onClick={onOpenMenu}
          >
            <Icon name="menu" className={`${btnIcon} !h-[26px] !w-[26px]`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
