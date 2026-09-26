import { Icon } from './IconSprite';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

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
    <section className="section" id="why" style={{ background: 'var(--grey-light)' }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow-rule" />
          <h2 className="section-title">{t('why.title')}</h2>
        </Reveal>

        <div className="why-list">
          {REASONS.map((reason, i) => (
            <Reveal className="why-item" key={reason.icon} delay={Math.min(i * 0.05, 0.2)}>
              <div className="why-icon">
                <Icon name={reason.icon} />
              </div>
              <div>
                <h3>{t(reason.titleKey)}</h3>
                <p>{t(reason.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
