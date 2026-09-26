import { Icon } from './IconSprite';
import MediaSlot from './MediaSlot';
import TopoMotif from './TopoMotif';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const CATEGORIES = [
  { icon: 'plane', key: 'city.cat.airport' },
  { icon: 'building', key: 'city.cat.hotels' },
  { icon: 'pin', key: 'city.cat.downtown' },
  { icon: 'badge247', key: 'city.cat.events' },
  { icon: 'briefcase', key: 'city.cat.business' },
  { icon: 'route', key: 'city.cat.tourism' },
];

export default function CityOran() {
  const { t, contacts } = useLanguage();

  return (
    <section className="section city" id="city">
      <MediaSlot className="city-photo" src="/assets/oran-coast.webp" alt={t('city.imgAlt')} optional />
      <div className="city-overlay" />
      <TopoMotif />

      <div className="container city-inner">
        <Reveal>
          <div className="eyebrow-rule" />
          <h2 className="section-title">{t('city.title')}</h2>
          <p className="city-copy">{t('city.copy')}</p>
        </Reveal>

        <Reveal className="city-categories" delay={0.1}>
          {CATEGORIES.map((cat) => (
            <div className="city-cat" key={cat.key}>
              <Icon name={cat.icon} />
              <span>{t(cat.key)}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="city-cta" delay={0.15}>
          <a href={contacts.waLink} target="_blank" rel="noopener" className="btn btn-primary">
            {t('city.cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
