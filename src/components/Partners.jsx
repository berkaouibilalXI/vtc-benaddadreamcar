import { Icon } from './IconSprite';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const PARTNER_GROUPS = [
  {
    id: 'hotels',
    icon: 'building',
    titleKey: 'partners.hotels.title',
    items: ['partners.hotels.l1', 'partners.hotels.l2', 'partners.hotels.l3', 'partners.hotels.l4'],
  },
  {
    id: 'business',
    icon: 'briefcase',
    titleKey: 'partners.business.title',
    items: ['partners.business.l1', 'partners.business.l2', 'partners.business.l3', 'partners.business.l4'],
  },
];

export default function Partners() {
  const { t, contacts } = useLanguage();

  return (
    <section className="section" id="partners" style={{ background: 'var(--grey-light)' }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-rule" />
          <h2 className="section-title">{t('partners.title')}</h2>
          <p className="section-sub">{t('partners.sub')}</p>
        </Reveal>

        <div className="partner-grid">
          {PARTNER_GROUPS.map((group, i) => (
            <Reveal className="partner-card" key={group.id} delay={i * 0.05}>
              <div className="icon-wrap">
                <Icon name={group.icon} />
              </div>
              <h3>{t(group.titleKey)}</h3>
              <ul>
                {group.items.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a href={contacts.waLink} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
            {t('partners.cta')}
          </a>
          <p className="partner-note">{t('partners.note')}</p>
        </Reveal>
      </div>
    </section>
  );
}
