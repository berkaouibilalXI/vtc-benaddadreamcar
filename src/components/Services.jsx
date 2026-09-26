import { Icon } from './IconSprite';
import MediaSlot from './MediaSlot';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

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
  const { t, contacts } = useLanguage();

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-rule" />
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-sub">{t('services.sub')}</p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <Reveal as="article" className="service-card" key={service.id} delay={Math.min(i * 0.05, 0.2)}>
              <MediaSlot className="service-media" src={service.img} alt={t(service.titleKey)} />
              <div className="service-body">
                <h3>{t(service.titleKey)}</h3>
                {service.subKey && <p>{t(service.subKey)}</p>}
                <p>{t(service.descKey)}</p>
                <a href={contacts.waLink} target="_blank" rel="noopener" className="link-cta">
                  <span>{t(service.ctaKey)}</span>
                  <Icon name="chevron" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
