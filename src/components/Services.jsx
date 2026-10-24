import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import MediaSlot from './MediaSlot';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_PATHS } from '../data/pages';
import { container, section, sectionHead, eyebrowRule, sectionTitle, sectionSub, linkCta, linkCtaIcon } from '../styles/ui';

const SERVICES = [
  {
    id: 'airport',
    img: '/assets/service-airport.webp',
    titleKey: 'services.airport.title',
    subKey: 'services.airport.sub',
    descKey: 'services.airport.desc',
    ctaKey: 'cta.book',
  },
  {
    id: 'hotel',
    img: '/assets/service-hotel.webp',
    titleKey: 'services.hotel.title',
    subKey: 'services.hotel.sub',
    descKey: 'services.hotel.desc',
    ctaKey: 'cta.book',
  },
  {
    id: 'business',
    img: '/assets/service-business.webp',
    titleKey: 'services.business.title',
    subKey: 'services.business.sub',
    descKey: 'services.business.desc',
    ctaKey: 'cta.contact',
  },
  {
    id: 'disposal',
    img: '/assets/service-chauffeur.webp',
    titleKey: 'services.disposal.title',
    subKey: 'services.disposal.sub',
    descKey: 'services.disposal.desc',
    ctaKey: 'cta.quote',
  },
  {
    id: 'outoftown',
    img: '/assets/service-outside.webp',
    titleKey: 'services.outoftown.title',
    subKey: null,
    descKey: 'services.outoftown.desc2',
    ctaKey: 'cta.quote',
  },
];

export default function Services() {
  const { t, lang, contacts } = useLanguage();

  return (
    <section className={section} id="services">
      <div className={container}>
        <Reveal className={sectionHead}>
          <div className={eyebrowRule} />
          <h2 className={sectionTitle}>{t('services.title')}</h2>
          <p className={sectionSub}>{t('services.sub')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              as="article"
              className="flex items-center gap-4 rounded-card border border-line bg-white p-3 shadow-card transition-[box-shadow,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-transparent hover:shadow-card-hover sm:gap-6 sm:p-4"
              key={service.id}
              delay={Math.min(i * 0.05, 0.2)}
            >
              <MediaSlot className="h-14 w-14 shrink-0 rounded-xl sm:h-19 sm:w-19" src={service.img} alt={t(service.titleKey)} width={192} height={192} />
              <div className="min-w-0">
                <h3 className="text-[clamp(18px,3vw,20px)] font-display font-bold">
                  <Link to={SERVICE_PATHS[service.id][lang]} hrefLang={lang} className="hover:text-red">
                    {t(service.titleKey)}
                  </Link>
                </h3>
                {service.subKey && <p className="mt-1 text-[clamp(13px,1.4vw,14px)]">{t(service.subKey)}</p>}
                <p className="mt-1 text-[clamp(13px,1.4vw,14px)]">{t(service.descKey)}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1">
                  <a href={contacts.waLink} target="_blank" rel="noopener" className={linkCta}>
                    <span>{t(service.ctaKey)}</span>
                    <Icon name="chevron" className={linkCtaIcon} />
                  </a>
                  <Link
                    to={SERVICE_PATHS[service.id][lang]}
                    hrefLang={lang}
                    className="text-[0.85rem] font-semibold text-grey-text underline-offset-4 hover:text-red hover:underline"
                  >
                    {t('svc.more')}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
