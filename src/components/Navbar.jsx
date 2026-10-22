import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LANG_PATHS } from '../data/config';
import { container, btnPrimary, btnSm, btnIcon } from '../styles/ui';

const NAV_LINKS = [
  { href: '#hero', key: 'nav.home' },
  { href: '#services', key: 'nav.services' },
  { href: '#fleet', key: 'nav.fleet' },
  { href: '#partners', key: 'nav.partners' },
  { href: '#contact', key: 'nav.contact' },
];

export default function Navbar({ onOpenMenu }) {
  const { t, lang, contacts } = useLanguage();

  return (
    <nav aria-label="Navigation principale / Main navigation" className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-start gap-3 sm:gap-6`}>
        <a href="#hero" className="font-display text-[1.05rem] font-extrabold leading-none tracking-[0.02em]">
          <img src="/logo-black.webp" alt={t('nav.logoAlt')} width={75} height={52} />
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

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <div
            className="flex items-center overflow-hidden rounded-full border border-line font-display text-[0.8rem] font-bold"
            role="group"
            aria-label="Langue / Language"
          >
            {['fr', 'en'].map((code) => (
              <Link
                key={code}
                to={LANG_PATHS[code]}
                hrefLang={code}
                lang={code}
                aria-current={lang === code ? 'true' : undefined}
                className={`px-3 py-[7px] ${lang === code ? 'bg-ink text-white' : 'text-grey-text'}`}
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </div>

          <a
            href={contacts.waLink}
            target="_blank"
            rel="noopener"
            className={`${btnPrimary} ${btnSm} hidden! desktop:inline-flex!`}
          >
            <span>{t('cta.whatsapp')}</span>
          </a>

          <button
            type="button"
            className="flex p-1.5 desktop:hidden"
            aria-label={t('nav.openMenu')}
            aria-expanded="false"
            onClick={onOpenMenu}
          >
            <Menu name="menu" className={`${btnIcon} h-6.5! w-6.5!`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
