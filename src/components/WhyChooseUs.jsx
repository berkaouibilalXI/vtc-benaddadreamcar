import { Icon } from './IconSprite';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { container, section, sectionHead, eyebrowRule, sectionTitle } from '../styles/ui';

const REASONS = [
  { icon: 'clock', titleKey: 'why.punctuality.title', descKey: 'why.punctuality.desc' },
  { icon: 'plane', titleKey: 'why.flight.title', descKey: 'why.flight.desc' },
  { icon: 'badge247', titleKey: 'why.available.title', descKey: 'why.available.desc' },
  { icon: 'shield', titleKey: 'why.discretion.title', descKey: 'why.discretion.desc' },
  { icon: 'seat', titleKey: 'why.comfort.title', descKey: 'why.comfort.desc' },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className={`${section} bg-grey-light`} id="why">
      <div className={container}>
        <Reveal className={sectionHead}>
          <div className={eyebrowRule} />
          <h2 className={sectionTitle}>{t('why.title')}</h2>
        </Reveal>

        <div className="flex flex-col gap-8 desktop:grid desktop:grid-cols-2 desktop:gap-x-12 desktop:gap-y-8">
          {REASONS.map((reason, i) => (
            <Reveal className="flex items-start gap-6" key={reason.icon} delay={Math.min(i * 0.05, 0.2)}>
              <div className="mt-0.5 shrink-0 text-ink">
                <Icon name={reason.icon} className="h-[22px] w-[22px] shrink-0 stroke-current fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]" />
              </div>
              <div>
                <h3 className="text-[clamp(18px,3vw,20px)] font-display font-bold">{t(reason.titleKey)}</h3>
                <p className="mt-1 max-w-[40ch] text-[clamp(13px,1.4vw,14px)]">{t(reason.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
