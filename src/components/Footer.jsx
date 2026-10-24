import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import TopoMotif from './TopoMotif';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_IDS, SERVICE_PATHS } from '../data/pages';
import { container } from '../styles/ui';

export default function Footer() {
  const { t, lang, config, contacts } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-ink py-16 pb-8 text-white/85" id="contact">
      <TopoMotif className="pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className={`${container} relative z-[2]`}>
        <div className="font-display text-xl font-extrabold text-white">
          BENADDA <span className="text-red">DREAMCAR</span>
        </div>
        <p className="mt-1.5 text-[clamp(14px,1.6vw,16px)] text-white/60">{t('footer.tagline')}</p>
        <p className="mt-0.5 text-[clamp(13px,1.4vw,14px)] text-white/40">{t('footer.tagline2')}</p>

        <div className="mt-12 grid gap-12 tablet:grid-cols-2">
        <div className="flex flex-col gap-4">
          <a
            className="flex items-center gap-3 text-[clamp(14px,1.6vw,16px)]"
            href={contacts.waLink}
            target="_blank"
            rel="noopener"
          >
            <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-red" />
            <span>WhatsApp</span>
          </a>

          {contacts.telLink && (
            <a className="flex items-center gap-3 text-[clamp(14px,1.6vw,16px)]" href={contacts.telLink}>
              <Icon
                name="phone"
                className="h-5 w-5 shrink-0 text-white/60"
              />
              <span dir="ltr">{config.PHONE_NUMBER}</span>
            </a>
          )}

          {contacts.igLink && (
            <a
              className="flex items-center gap-3 text-[clamp(14px,1.6vw,16px)]"
              href={contacts.igLink}
              target="_blank"
              rel="noopener"
            >
              <Icon
                name="insta"
                className="h-5 w-5 shrink-0 text-white/60"
              />
              <span dir="ltr">{config.INSTAGRAM_HANDLE}</span>
            </a>
          )}

          {contacts.mailLink && (
            <a className="flex items-center gap-3 text-[clamp(14px,1.6vw,16px)]" href={contacts.mailLink}>
              <Icon
                name="mail"
                className="h-5 w-5 shrink-0 text-white/60"
              />
              <span dir="ltr">{config.EMAIL}</span>
            </a>
          )}

          <div className="flex items-start gap-3 text-[clamp(14px,1.6vw,16px)]">
            <Icon
              name="pin"
              className="mt-0.5 h-5 w-5 shrink-0 text-white/60"
            />
            <div>
              <strong>{t('footer.hq')}</strong>
              <br />
              {t('footer.hqAddress')}
            </div>
          </div>

          <div className="flex items-start gap-3 text-[clamp(14px,1.6vw,16px)]">
            <Icon
              name="pin"
              className="mt-0.5 h-5 w-5 shrink-0 text-white/60"
            />
            <div>
              <strong>{t('footer.shop')}</strong>
              <br />
              {t('footer.shopAddress')}
            </div>
          </div>
        </div>

        <nav aria-label={t('footer.services')}>
          <div className="font-display text-[clamp(14px,1.6vw,16px)] font-bold text-white">{t('footer.services')}</div>
          <ul className="mt-4 flex flex-col gap-3 text-[clamp(14px,1.6vw,16px)]">
            {SERVICE_IDS.map((id) => (
              <li key={id}>
                <Link to={SERVICE_PATHS[id][lang]} hrefLang={lang} className="text-white/70 transition-colors hover:text-white">
                  {t(`services.${id}.title`)}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[clamp(13px,1.4vw,14px)] text-white/50">{t('footer.rentalLead')}</p>
          <a
            href={config.RENTAL_URL}
            className="mt-1 inline-block font-display text-[clamp(14px,1.6vw,16px)] font-bold text-white underline-offset-4 hover:underline"
          >
            {t('footer.rental')}
          </a>
        </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[clamp(13px,1.4vw,14px)] text-white/40">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
