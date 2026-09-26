import { Icon } from './IconSprite';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { container, section, sectionHead, eyebrowRule, sectionTitle, sectionSub, btnPrimary } from '../styles/ui';

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
    <section className={`${section} bg-grey-light`} id="partners">
      <div className={container}>
        <Reveal className={sectionHead}>
          <div className={eyebrowRule} />
          <h2 className={sectionTitle}>{t('partners.title')}</h2>
          <p className={sectionSub}>{t('partners.sub')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {PARTNER_GROUPS.map((group, i) => (
            <Reveal className="rounded-card bg-white p-6" key={group.id} delay={i * 0.05}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-grey-light">
                <Icon name={group.icon} />
              </div>
              <h3 className="text-[clamp(18px,3vw,20px)] font-display font-bold text-red">{t(group.titleKey)}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-[clamp(13px,1.4vw,14px)] text-ink">
                    <span className="font-extrabold text-red">·</span>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a href={contacts.waLink} target="_blank" rel="noopener" className={`mt-8 ${btnPrimary}`}>
            {t('partners.cta')}
          </a>
          <p className="mt-6 rounded-smcard bg-grey-light p-6 text-[clamp(13px,1.4vw,14px)] text-grey-text">
            {t('partners.note')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
