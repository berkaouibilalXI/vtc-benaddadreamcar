import { Icon } from './IconSprite';
import MediaSlot from './MediaSlot';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { container, section, sectionHead, eyebrowRule, sectionTitle, sectionSub, btnDark } from '../styles/ui';

const FEATURES = ['fleet.f1', 'fleet.f2', 'fleet.f3', 'fleet.f4'];

export default function Fleet() {
  const { t, contacts } = useLanguage();

  return (
    <section className={section} id="fleet">
      <div className={container}>
        <Reveal className={sectionHead}>
          <div className={eyebrowRule} />
          <h2 className={sectionTitle}>{t('fleet.title')}</h2>
          <p className={sectionSub}>{t('fleet.sub')}</p>
        </Reveal>

        <Reveal
          className="overflow-hidden rounded-card border border-line tablet:grid tablet:grid-cols-[0.9fr_1.1fr] tablet:items-center tablet:gap-8"
          delay={0.05}
        >
          <div>
            <MediaSlot className="relative aspect-16/10" src="/assets/pass-at-pro.png" alt={t('fleet.imgAlt')} />
          </div>
          <div className="p-6">
            <h3 className="text-[clamp(24px,4.5vw,34px)] font-display font-extrabold">PASSAT PRO</h3>
            <p className="mt-1 font-display text-[clamp(13px,1.4vw,14px)] font-bold text-red">{t('fleet.tagline')}</p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {FEATURES.map((key) => (
                <li key={key} className="flex items-center gap-2.5 text-[clamp(13px,1.4vw,14px)] text-ink">
                  <Icon name="check" className="h-4.5 w-4.5 shrink-0 stroke-red fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
            <a href={contacts.waLink} target="_blank" rel="noopener" className={`mt-6 ${btnDark}`}>
              {t('fleet.cta')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
