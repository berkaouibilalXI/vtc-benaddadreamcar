import { Icon } from './IconSprite';
import MediaSlot from './MediaSlot';
import TopoMotif from './TopoMotif';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { container, section, eyebrowRule, btnPrimary } from '../styles/ui';

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
    <section className={`${section} relative overflow-hidden bg-ink text-white`} id="city">
      <MediaSlot className="absolute inset-0 z-0" src="/assets/oran-coast.webp" alt={t('city.imgAlt')} optional />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/55 to-ink/75" />
      <TopoMotif />

      <div className={`${container} relative z-2`}>
        <Reveal>
          <div className={eyebrowRule} />
          <h2 className="text-[clamp(32px,7vw,48px)] font-display font-extrabold leading-[1.15] tracking-[-0.01em] text-white">
            {t('city.title')}
          </h2>
          <p className="mt-4 max-w-[48ch] text-[clamp(14px,1.6vw,16px)] text-white/75">{t('city.copy')}</p>
        </Reveal>

        <Reveal
          className="mt-12 grid grid-cols-3 gap-6 tablet:grid-cols-6"
          delay={0.1}
        >
          {CATEGORIES.map((cat) => (
            <div className="flex flex-col items-center gap-2 text-center" key={cat.key}>
              <Icon
                name={cat.icon}
                className="h-6 w-6 shrink-0 stroke-white/85 fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"
              />
              <span className="text-[clamp(13px,1.4vw,14px)] font-medium text-white/85">{t(cat.key)}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12" delay={0.15}>
          <a href={contacts.waLink} target="_blank" rel="noopener" className={btnPrimary}>
            {t('city.cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
